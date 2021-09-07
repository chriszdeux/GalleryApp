import React from 'react'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageInfo } from '../modal/ImageInfo'
import { CardImage } from './CardImage'
import { CardImageInfo } from './CardImageInfo'

export const Card = ({ data }) => {
  // debugger
  // const { data, currentValue } = values
  // const { handleToggle, data } = values
  const { position, id } = data
  const {handleToggle, toggle} = useShowComponent(false)
  // debugger
  return (
    <>
    <article 

      id={ id }
      className="card"
      onClick={ handleToggle }
    >
      <CardImage data={ data }/>
      <CardImageInfo data={ data }/>
    </article>
    {
      toggle && <ImageInfo values={ {handleToggle, position, id } }/>
    }
    </>
  )
}
