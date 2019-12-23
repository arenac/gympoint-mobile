import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatDistance, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';


import { Container, NewCheckinButton, List, CheckinContainer, CheckInText, When } from './styles';

export default function CheckIn() {
  const id = useSelector(state => state.auth.student.id);
  const [checkins, setCheckins] = useState([]);
  const [checkinLoading, setCheckingLoadin] = useState(false);

  async function fetchCheckins() {
    const response = await api.get(`students/${id}/checkins`);

    const data = response.data.map(checkin => {
      return {
        ...checkin,
        initialDateFormated: formatDistance(parseISO(checkin.createdAt), new Date(), { addSuffix: true, locale: en}),
      }
    });

    setCheckins(data);
  }

  useEffect(() => {
    fetchCheckins();
  }, [id]);

  async function handleCheckin() {
    setCheckingLoadin(true);
    const response = await api.post(`students/${id}/checkins`);

    const data = {
      ...response.data,
      initialDateFormated: formatDistance(parseISO(response.data.createdAt), new Date(), { addSuffix: true, locale: en}),
    }

    setCheckins([data, ...checkins])

    setCheckingLoadin(false);
  }

  return (
    <Container>
      <NewCheckinButton loading={checkinLoading} onPress={handleCheckin}>New check-in</NewCheckinButton>
      <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CheckinContainer>
            <CheckInText>{`Check-in #${item.id}`}</CheckInText>

            <When>{item.initialDateFormated}</When>
          </CheckinContainer>
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