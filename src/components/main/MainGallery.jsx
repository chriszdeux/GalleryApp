import React from 'react'

import photo from '../../utils/temp/photo.jpg';
import { useShowComponent } from '../hooks/useShowComponent';
import { ImageInfo } from '../modal/ImageInfo';
import { Card } from './Card';

export const MainGallery = () => {
  const {handleToggle, toggle} = useShowComponent(false)
  // debugger
  return (
    <>
      <section className="images__container">
        <Card 
          handleToggle={ handleToggle }
        />
      </section>
      {
        toggle && <ImageInfo handleToggle={ handleToggle }/>
      }
    </>
  )
}
