import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function CheckIn({ navigation }) {
  const checkins = navigation.getParam('checkins');

  console.tron.log(checkins);

  return <View />;
}


CheckIn.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-circle" size={20} color={tintColor} />
  ),
};