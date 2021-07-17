// Core
import React from "react";

// Hooks
import { useQueryAllAvailablePets } from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets();

  const loaderJSX = loading && (
    <p>Loading...</p>
  )

  const errorJSX = error && (
    <p>
      Error: { error.message }
    </p>
  )

  const petsJSX = pets && pets.map(({ id, name, weight }) => (
    <p key={ id }>
      <span>Name: { name }</span><br/>
      <span>Weight: { weight }</span>
    </p>
  ))

  return (
    <>
      <button onClick={ getAllAvailablePets }>Download</button>
      { loaderJSX }
      { errorJSX }
      { petsJSX }
    </>
  )
}