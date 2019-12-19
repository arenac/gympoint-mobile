import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function CheckIn({ navigation }) {
  const checkins = navigation.getParam('checkins');

  console.tron.log(checkins);

  return <View />;
}
