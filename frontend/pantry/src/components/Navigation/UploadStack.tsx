import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ApiTester from '../testComp/ApiTester.tsx';
import ImageUpload from '../Upload/ImageUpload.tsx';
import Reciepts from '../Reciepts/Reciepts.tsx';
import TextRecog from '../Upload/TextRecog.tsx';
import Upload from '../Upload/Upload.tsx';
import { screenOptions } from './style.ts';

const Stack = createStackNavigator();

const UploadStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
      }}>
      <Stack.Screen name="Upload" component={Upload} />
      <Stack.Screen name="Api" component={ApiTester} />
      <Stack.Screen name="ImageUpload" component={ImageUpload} />
      <Stack.Screen name="Reciepts" component={Reciepts} />
      <Stack.Screen name="Parsed" component={TextRecog} />
    </Stack.Navigator>
  );
};

export default UploadStack;