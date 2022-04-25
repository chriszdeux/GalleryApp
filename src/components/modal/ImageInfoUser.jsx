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
import { LoadingComponent } from '../loading/LoadingComponent';
import { ErrorData } from '../error/ErrorData';

export const ImageInfoUser = ( { values } ) => {
  // debugger
  const { handleToggle, position, id, preview_photos, toggle } = values
  const { setDataCollection, dataCollection:{ data, load }, handleData, handleEachData, transitionAnimation } = useContext(DataContext)
  // debugger
  // const { handleToggle, position, id, } = values;
  // const goToComponent = useRef(id)
  // const { handleToggle, data:{ urls, color, blur_hash, description, user, likes }, position} = values;
  // const { data } = useContext(DataContext )
  // const { color } = data[position] 
  const { dataImagesCollection, loading, error } = useFetchCollectionImages( id )
  // debugger
  useEffect(() => {
    handleEachData(dataImagesCollection)
  }, [ dataImagesCollection ])
  
  useEffect(() => {
    setDataCollection({
      data: handleData,
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
  const { fade_out, fade_in } = transitionAnimation
  const {slider, increment, decrement, animation, memoNextImage, memoPrevImage} = useIncrementDecrement( 0 )
  const [handleAnimation, setHandleAnimation] = useState('');


  useEffect(() => {
    setHandleAnimation(fade_in)
  },[  ])

  const handleClose = () => {
    setHandleAnimation(fade_out)
    setTimeout(() => {
      handleToggle()
    }, 1000);
  }

  // debugger
  return (
    <>
    <section className={`modal__image__info ${ handleAnimation }`}  >
      <CloseIcon 
        className="close--icon"
        onClick={ handleClose }
      />
        {/* <div className="username"> */}
          {/* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
        {
        load
        ? <LoadingComponent />
        : error
          ? <ErrorData />
          :
          <div  className={`modal__image`}>
            <ModalImage values={{ slider, animation }} />
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
      <SliderControlsUser values={{ slider, increment, decrement, handleData, memoPrevImage, memoNextImage }}/>
        }

      </section>
      
      </>
  )
}
