import React from "react"
import { useLocation } from "react-router-dom"

export default function Breadcrumb({ title }) {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h2 data-testid={`breadcrumb-${location.pathname}`}>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
};