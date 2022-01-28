import React from 'react'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageInfo } from '../modal/ImageInfo'
import { CardImage } from './CardImage'
import { CardImageInfo } from './CardImageInfo'

export const Card = ({ values }) => {
  // debugger
  const { data, index, handleToggle, toggle, setHandleIndex } = values
  // const { data, currentValue } = values
  // const { handleToggle, data } = values
  const { position, id } = data
  // debugger
  
  return (
    <>
    {/* <article 

      id={ id }
      className="card"
      onClick={ handleToggle }
    > */}
      <CardImage values={ {data, index, handleToggle, toggle, setHandleIndex} }/>
      {/* <CardImageInfo data={ data }/> */}
    {/* </article> */}
    
    </>
  )
}
