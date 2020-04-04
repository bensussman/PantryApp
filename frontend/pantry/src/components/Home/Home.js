import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => {
  const navigateToUsers = () => navigation.navigate('User');
  const navigateToTestComp = () => navigation.navigate('Test');
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={navigateToUsers} style={styles.button}>
        <Text style={styles.buttonText}>Go to Users</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToTestComp} style={styles.button}>
        <Text style={styles.buttonText}>Go to Test Comp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
