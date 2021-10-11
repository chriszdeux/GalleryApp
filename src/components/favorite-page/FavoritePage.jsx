import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DataContext } from '../context/DataContext'
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'
import { ModalFavImages } from './ModalFavImages'
// import { ModalImageUser } from '../modal/ModalImageUser'
// import { ModalFavImages } from './ModalFavImages'
// ModalFavImages
export const FavoritePage = () => {
  const { favImages, mediaQueries: { tablet, tablet_hd, desk, desk_hd, full_hd } } = useContext( DataContext )
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState([])
  const [slider, setSlider] = useState(0)
  // const {slider, increment, decrement} = useIncrementDecrement( currentPosition )
  // debugger

  useEffect(() => {
    setData(favImages)
  }, [ favImages ])

  const handleOpenModal = (position) => {
    // debugger
    setSlider(position)
    setOpenModal(!openModal)
    // setData(favImages)
    // setSlider(position)
  }

  // useEffect()


  // debugger
  return (
    <>
    <section id="favorite__page">
    <h2 className="no--images">{ favImages.length > 0 ? `Favorite images: ${favImages.length}` : 'No Images' }</h2>
      <div className="favorite__page">
      {
        favImages.length > 0 &&  favImages.map((item, index) => (
           
          <figure
            key={ item.id }
            className="fav__image"
            onClick={ () => handleOpenModal(index) }
          >
            <picture>
              <source media={ desk } srcSet={ item.urls.regular } />
              <source media={ desk_hd } srcSet={ item.urls.full } />
              <source media={ tablet_hd } srcSet={ item.urls.regular } />
            </picture>
            <LazyLoadImage className="fav--image"  src={ item.urls.regular } alt={ item.alt_description } />
          </figure>

          ))
      }

      </div>
    </section>
    {
      openModal &&
      <ModalFavImages values={{ slider, data, handleOpenModal }}/>
    }
  </>
  )
}
