// Core
import React from "react";

// Hooks
import { usePetReturned } from './hooks/usePetReturned'

export const PetReturned = () => {
  const { pet, errors } = usePetReturned();

  const errorsJSX = errors && (
    <p>
      Error: { errors.message }
    </p>
  )

  const petsJSX = pet && (
    <>
      <p>Id: { pet.id }</p>
      <p>Name: { pet.name }</p>
    </>
  )

  return (
    <>
      <h1>Pet Returned</h1>
      { petsJSX }
      { errorsJSX }
    </>
  )
}