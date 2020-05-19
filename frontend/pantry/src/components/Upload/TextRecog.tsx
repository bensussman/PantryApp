import React, { useState, useEffect, Props, useRef } from 'react';
import vision from '@react-native-firebase/ml-vision';
import { ScrollView, Text, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { dummy } from '../../../dummydata';
import { parseReceipt } from '../../redux/actions/textRecogActions.ts';
import algoRythm1 from './parsingTest/recieptText2';
import ItemConfirmation from './ItemConfirmation.tsx';
import { client } from '../../../proxy';

const TextRecog = ({ route, navigation }: Props) => {
  const recog: object = useSelector((state) => state.camera);
  const dispatch = useDispatch();

  const { localUriPath, firebaseImageURL } = route.params;
  const [text, setText] = useState({ receipt_url: null });
  const didMountRef = useRef(false);

  useEffect(() => {
    localUriPath ? processImg() : Alert.alert(`Choose Photo first`);

    // if (didMountRef.current) {
    dispatch(parseReceipt(text));
    // } else didMountRef.current = true;
  }, [dispatch, recog]);

  console.log(`Local Path for TextRecog Component: `, localUriPath);

  const processImg = async () => {
    const processedText = await vision().textRecognizerProcessImage(
      localUriPath,
    );

    console.log(`Processed Text: `, processedText);

    const items = await algoRythm1(processedText.text);
    console.log(`Items: `, items);
    // dispatch(parseReceipt({ receipt_url: firebaseImageURL, ...items }))
    setText({ receipt_url: firebaseImageURL, ...items });
    // const textJsxArr = processedText.blocks.map((block) => {
    //   console.log(`Text Block: `, block.text);
    //   console.log(`Confidence: `, block.confidence);
    //   // console.log(`Language: `, block.recognizedLanguages);
    //   return <Text>{block.text}</Text>;
    // });

    // setText(textJsxArr);
  };

  const sendData = async () => {
    let receipt_json = dummy;
    try {
      const { data } = await client.post('/receipts/upload', receipt_json);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToParsed = () => {
    navigation.navigate('Confirmation', { parsedText: text });
  };

  return (
    <ScrollView>
      {/* {text} */}
      {text.receipt_url ? (
        <ItemConfirmation navigation={navigation} parsedReceipt={text} />
      ) : null}
      {/* {text ? (
        <Button title="Confirmation" onPress={goToParsed} color="green" />
      ) : null}
      <Button title="Submit" onPress={sendData} color="green" /> */}
    </ScrollView>
  );
};

TextRecog.navigationOptions = ({ navigation }) => ({
  title: 'Parsed',
  // headerShown: false,
});

export default TextRecog;
