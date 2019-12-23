import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatDistance, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';
import { View } from 'react-native';

import api from '~/services/api';

import { Container, List, Help, HelpContainer, Header, Status, When, Question } from './styles';

export default function Help() {
  const id = useSelector(state => state.auth.student.id);
  const [helpList, setHelpList] = useState([]);

  useEffect(() => {
    async function fetchHelpList() {
      const response = await api.get(`students/${id}/help-orders`);

      const data = response.data.map(help => {
        return {
          ...help,
          formatedDate: formatDistance(parseISO(help.created_at), new Date(), { addSuffix: true, locale: en} ),
          answerd: help.answer !== null,
        }
      });

      setHelpList(data);
    }
  }, [id]);

  function handleNewHelp() {}

  return (
    <Container>
     <List
        data={checkins}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Help onPress={() => {}}>
            <HelpContainer>
              <Header>
                <Status answerd={item.answerd}>{(item.answerd ? 'Answred' : 'Pending')}</Status>
                <When>{item.formatedDate}</When>
              </Header>
              <Question>{item.question}</Question>
            </HelpContainer>
          </Help>
        )}
      />
    </Container>
  );
}
