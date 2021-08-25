import React from 'react'
import { CardImage } from './CardImage'
import { CardImageInfo } from './CardImageInfo'

export const Card = ({ handleToggle }) => {
  // debugger

  return (
    <article 
      className="card"
      onClick={ handleToggle }
    >
      <CardImage />
      <CardImageInfo />
    </article>
  )
}
