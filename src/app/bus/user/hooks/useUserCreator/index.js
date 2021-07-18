// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../../../../hooks/useForm';
//import { useUserCreator } from './useUserCreator'

// Mutations
const mutationCreateUser = loader('./gql/mutationCreateUser.graphql');

export const useUserCreator = () => {
  const [_save, { data }] = useMutation(mutationCreateUser);
  const {form, handleChange} = useForm({
    name: '',
    email: '',
    password: ''
  });

  const save = () => {
    _save({
      variables: form
    })
  };

  return {
    handleChange,
    save,
    createdUser: data && data.signUp
  }
};
