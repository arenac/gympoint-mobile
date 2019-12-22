import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { Container, List } from './styles';

export default function CheckIn() {
  const id = useSelector(state => state.student.id);
  const [checkins, setCheckins] = useState([]);

  async function fetchCheckins() {
    const response = await api.get(`students/1/checkins`);

    setCheckins(response.data);
  }
  
  useEffect(() => {

    fetchCheckins();
  }, []);

  return (
    <Container>
    
      <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Text>{item.id}</Text>
          )}
        />
    </Container>
  );
}


CheckIn.navigationOptions = {
  tabBarLabel: 'Check-in',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-circle" size={20} color={tintColor} />
  ),
};