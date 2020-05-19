import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { confirmStyles as styles } from './styles.ts';
import RecieptItems from './RecieptItems.tsx';
import { priceFix, quantityFix } from './helpers/helpers.ts';
import CameraModal from '../Camera/cameraModal.tsx';
import { client } from '../../../proxy';
import { parseReceipt } from '../../redux/actions/textRecogActions.ts';

const ItemConfirmation = (props: any) => {
  const receipt: object = useSelector((state) => state.recog.receipt);
  const dispatch = useDispatch();

  // console.log(route.params);
  const { navigation, parsedReceipt } = props;
  // const [reciept, setReciept] = useState(parsedReceipt);
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    Alert.alert('Confirm', '', [
      { text: 'No', onPress: () => console.log('Cancelled') },
      {
        text: 'Yes',
        onPress: async () => {
          const data = await client.get('/test');
          console.log(data);
          // POST RECIEPT TO BACKEND
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Pantry' }],
            }),
          );
        },
      },
    ]);
    console.log(receipt);
  };

  const handleChange = (item: any, name: any, text: any) => {
    console.log(item, name, text);
    const updatedReceipt = { ...receipt };
    if (item === 'storeName') {
      updatedReceipt.storeName = text;
    } else if (item === 'recieptDate') {
      updatedReceipt.recieptDate = text;
    } else if (name === 'quantity') {
      updatedReceipt.recieptItems[item][name] = quantityFix(text);
    } else if (name === 'price') {
      updatedReceipt.recieptItems[item][name] = priceFix(text);
    } else {
      updatedReceipt.recieptItems[item][name] = text;
    }
    dispatch(parseReceipt(updatedReceipt));
    // setReciept(updatedReceipt);
  };

  const getRecieptTotal = () => {
    // TODO fix the NaN displaying instead of the total
    console.log(`HERE`, receipt);
    return Object.keys(receipt.recieptItems)
      .reduce(
        (acc, num) =>
          acc +
          receipt.recieptItems[num].quantity * receipt.recieptItems[num].price,
        0,
      )
      .toFixed(2);
  };

  return (
    <>
      {receipt ? (
        <View style={styles.container}>
          <View style={styles.storeContainer}>
            <View style={styles.storeHeading}>
              <View style={styles.storeNameRow}>
                <TextInput
                  style={styles.storeName}
                  onChangeText={(text) =>
                    handleChange('storeName', null, text)
                  }>
                  {receipt.storeName}
                </TextInput>
                <TextInput
                  style={styles.storeDate}
                  onChangeText={(text) =>
                    handleChange('recieptDate', null, text)
                  }>
                  {receipt.recieptDate}
                </TextInput>
              </View>
            </View>
          </View>
          <View style={styles.scrollViewContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <RecieptItems
                reciept={receipt.recieptItems}
                handleChange={handleChange}
              />
              <View style={styles.totalRow}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>{getRecieptTotal()}</Text>
              </View>
            </ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleConfirm}>
                <Text style={styles.confirmText}>Looks good!</Text>
              </TouchableOpacity>
              {!modalVisible ? (
                <TouchableOpacity
                  style={styles.scanBarcode}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Scan</Text>
                </TouchableOpacity>
              ) : (
                <CameraModal
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                />
              )}
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ItemConfirmation;
