import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { productStyles } from './shoppingListStyles.ts';

const Product = ({ keyVal, item, setItemToComplete }: any) => {
  return (
    <View key={keyVal} style={productStyles.product}>
      <View>
        <Text style={productStyles.productInfo}>{item.product}</Text>
        <Text style={productStyles.productInfo}>{item.quantity}</Text>
      </View>

      <Icon
        name="trash"
        onPress={() => setItemToComplete(keyVal)}
        style={productStyles.deleteBtn}
      />
    </View>
  );
};

export default Product;
