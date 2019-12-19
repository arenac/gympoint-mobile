import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';

import api from '~/services/api';
import { validateRequest } from '~/store/modules/student/actions';

import {
  Container,
  Logo,
  Form,
  InputContainer,
  FormInput,
  SubmitButton,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  async function handleSubmit() {
    dispatch(validateRequest(id));
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <InputContainer>
          <FormInput
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="Your ID"
            returnKeyType="send"
            value={id}
            onChangeText={setId}
          />
        </InputContainer>
        <SubmitButton onPress={handleSubmit}>Enter</SubmitButton>
      </Form>
    </Container>
  );
}
