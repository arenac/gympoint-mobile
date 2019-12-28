import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import { Container, QuestionInput, NewQuestionButton } from './styles';

export default function NewQuestion({ navigation }) {
  const [question, setQuestion] = useState('');
  const id = useSelector(state => state.auth.student.id);
  const onAddNewHelp = navigation.getParam('onAddNewHelp');

  async function handleSubmit() {
    if (question !== '') {
      const response = await api.post(`students/${id}/help-orders`, {
        question,
      });
      console.tron.log('response', response.data);
      onAddNewHelp(response.data);
    }
  }

  return (
    <Container>
      <QuestionInput
        multiline
        numberOfLines={20}
        value={question}
        onChangeText={value => setQuestion(value)}
        placeholder="Insert your question"
        textAlignVertical="top"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <NewQuestionButton onPress={handleSubmit}>Send request</NewQuestionButton>
    </Container>
  );
}
