import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageContainer } from './ImageContainer'

export const PhotosGrid = () => {
  const { dataUser } = useContext(DataContext)
  const { listPhotos } = !!dataUser && dataUser
  // debugger
  const { handleToggle, toggle } = useShowComponent()

  return (
    <div className="photos__grid ">
      {
        listPhotos !== undefined &&
        listPhotos.map(item => (
          <ImageContainer key={ item.id }item={ item }/>
        ))
      }
    </div>
  )
}
