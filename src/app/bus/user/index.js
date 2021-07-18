// Core
import React from 'react';

// Hooks
import { useForm } from '../../hooks/useForm';
import { useUserCreator } from './hooks/useUserCreator';

export const User = () => {
  const {} = useForm();

  const { handleChange, save, createdUser } = useUserCreator();

  const userJSX = createdUser && (
    <p>
      We created user with name: { createdUser.name }
    </p>
  );

  return (
    <>
      <h1>Registration</h1>
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="email" name="email" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { userJSX }
    </>
  )
}