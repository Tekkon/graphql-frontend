// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
//import { useState } from 'react';

// Hooks
import { useForm } from '../../../../hooks/useForm';

// Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useUserLogin = () => {
  const [_logIn, { data }] = useMutation(mutationLogIn);
  const { form, handleChange } = useForm({
    name: '',
    password: ''
  });

  const authorizedUser = data && data.login;

  const logIn = () => {
    _logIn({
      variables: form
    });
  };

  return {
    login,
    handleChange,
    authorizedUser,
  }
};
