
import React from "react"

export default function Welcome({name = "World"}) {
  return (
    <>
        <h1>Welcome, {name}!</h1>
    </>
  )
}