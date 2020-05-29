import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { productStyles } from './shoppingListStyles.ts';

const Product = ({ navigation, keyVal, item, deleteProduct }: any) => {
  //   const navigateToImg = () => navigation.navigate('Pantry');
  //   const navigateToReceipts = () => navigation.navigate('Receipts');
  return (
    <View key={keyVal} style={styles.product}>
      <View>
        <Text style={styles.productInfo}>{item.product}</Text>
        <Text style={styles.productInfo}>{item.quantity}</Text>
      </View>
      {/* <Text style={styles.productInfo}>{val.text}</Text> */}

      <Icon
        name="trash"
        onPress={() => setItemToComplete(keyVal)}
        style={productStyles.deleteBtn}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  deleteBtn: {
    alignItems: 'center',
    bottom: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 10,
    // padding: 10,
  },
  product: {
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingRight: 100,
    position: 'relative',
  },
  productInfo: {
    borderLeftColor: 'black',
    borderLeftWidth: 10,
    paddingLeft: 20,
  },
});
