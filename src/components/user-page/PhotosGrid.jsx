import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageContainer } from './ImageContainer'
import Masonry from "react-masonry-component";
import { Card } from '../main/Card';
import { CardImage } from '../main/CardImage';

export const PhotosGrid = () => {
  const { dataUser, handleData, handleEachData } = useContext(DataContext)
  const { listPhotos } = !!dataUser && dataUser
  // debugger
  const { masonryOptions } = useContext(DataContext)
  const { handleToggle, toggle } = useShowComponent()
  // debugger

  useEffect(() => {
    handleEachData(listPhotos)
  }, [ dataUser ])

  // debugger
  return (
    <div className="images__container">
      {
        // listPhotos !== undefined &&
        !!listPhotos && !!handleData && handleData.map((data, index) => (
          // <ImageContainer key={ item.id }item={ item }/>
          <CardImage key={ data.id } values={{ data, index }}/>
          ))
        }
    </div>
  )
}
