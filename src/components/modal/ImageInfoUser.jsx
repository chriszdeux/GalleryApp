import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import photo from '../../utils/temp/photo.jpg';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai'
import { DataContext } from '../context/DataContext';
import { ModalImage } from './ModalImage';
import { cleanup } from '@testing-library/react';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { SliderControls } from '../utils/SliderControls';
import { ModalImageUser } from './ModalImageUser';
import { SliderControlsUser } from '../utils/SliderControlsUser';
import { useFetchCollectionImages } from '../hooks/useFetchCollectionImages';

export const ImageInfoUser = ( { values } ) => {
  // debugger
  const { handleToggle, position, id, preview_photos } = values
  const { setDataCollection, dataCollection:{ data, load } } = useContext(DataContext)
  // debugger
  // const { handleToggle, position, id, } = values;
  // const goToComponent = useRef(id)
  // const { handleToggle, data:{ urls, color, blur_hash, description, user, likes }, position} = values;
  // const { data } = useContext(DataContext )
  // const { color } = data[position] 
  const { dataImagesCollection, loading } = useFetchCollectionImages( id )
  useEffect(() => {
    setDataCollection({
      data: dataImagesCollection,
      load: loading
    })
  }, [ dataImagesCollection ])
  // debugger
  // debugger
  // const [dataCollection, setDataCollection] = useState({
  //   data: dataImagesCollection,
  //   load: loading
  // })dataImagesCollection
  
  // const { data, load } = dataCollection
  // const [bgColor, setBgColor] = useState()
  const {slider, increment, decrement, animation, memoNextImage, memoPrevImage} = useIncrementDecrement( 0 )

  useEffect(() => {
    // setDataCollection({
    //   data: dataImagesCollection,
    //   load: loading
    // })
  }, [ dataImagesCollection ])

  // const [imageComponent, setImageComponent] = useState(null)

  // const [animation, setAnimation] = useState(false)

  useEffect(() => {
    // setAnimation(!animation)
  }, [ position ])

  // debugger
  return (
    <section className="modal__image__info"  >
      <CloseIcon 
        className="close--icon"
        onClick={ handleToggle }
      />
        {/* <div className="username"> */}
          {console.log('changed')/* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
          
          {
        !load &&
          <div  className={`modal__image`}>
            <ModalImageUser values={{ data, slider, animation }} />
          </div>
          }

        {/* <div  className="modal__image">
          {
            data.map(item => (
              <ModalImage values={ item }/>        
            ))
          }
        </div> */}
        {
          !load &&
      <SliderControlsUser values={{ slider, increment, decrement, data, memoPrevImage, memoNextImage }}/>
        }

      </section>
  )
}
