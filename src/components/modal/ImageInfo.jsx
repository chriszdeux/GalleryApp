import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import photo from '../../utils/temp/photo.jpg';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai'
import { DataContext } from '../context/DataContext';
import { ModalImage } from './ModalImage';
import { cleanup } from '@testing-library/react';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { SliderControls } from '../utils/SliderControls';
import { SliderControlsUser } from '../utils/SliderControlsUser';

export const ImageInfo = ( { values } ) => {
  // debugger
  const { handleToggle, index, id} = values;
  const { handleData, transitionAnimation, switchMenu, setSwitchMenu, dataCollection } = useContext(DataContext )
  // debugger
  const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = transitionAnimation
  const [handleAnimation, setHandleAnimation] = useState('');
  useEffect(() => {
    setSwitchMenu(true)
    setHandleAnimation(fade_in)
  }, [  ])
  // debugger
  const { color } = handleData[index] 
  const [bgColor, setBgColor] = useState()
  const myRef = useRef()
  const [component, setComponent] = useState()


  const {slider, increment, decrement, animation, memoNextImage, memoPrevImage} = useIncrementDecrement( index )


  useEffect(() => {
    setBgColor(color)
  }, [ index ])
  // debugger
  const [imageComponent, setImageComponent] = useState(null)
  // debugger
  
  const handleMenu = () => {
    setHandleAnimation(fade_out)
    setTimeout(() => {
      handleToggle();
      setSwitchMenu(!switchMenu)
    }, 1000);
  }


  return (
    <section className={`modal__image__info ${handleAnimation}`}  >
      <CloseIcon 
        className="close--icon"
        onClick={ handleMenu }
      />
        {/* <div className="username"> */}
          {console.log('changed')
          /* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
        
        <div  className={`modal__image `} ref={ myRef }>
          <ModalImage values={ {slider, animation} } />
          
        </div>
        {/* <div  className="modal__image">
          {
            data.map(item => (
              <ModalImage values={ item }/>        
            ))
          }
        </div> */}
      <SliderControlsUser values={{ slider, increment, decrement, handleData, memoNextImage, memoPrevImage }}/>

      </section>
  )
}
