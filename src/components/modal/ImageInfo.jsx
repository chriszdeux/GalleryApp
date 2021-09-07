import React, { useContext, useEffect, useRef, useState } from 'react'
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
  const { handleToggle, position, id} = values;
  // const goToComponent = useRef(id)
  // const { handleToggle, data:{ urls, color, blur_hash, description, user, likes }, position} = values;
  const { data } = useContext(DataContext )
  const { color } = data[position] 
  const [bgColor, setBgColor] = useState()
  const {slider, increment, decrement} = useIncrementDecrement( position )


  useEffect(() => {
    setBgColor(color)
  }, [ position ])
  // const scrollComponent = () => {
  //   window.scrollTo({
  //     top: goToComponent.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  //   // debugger
  // }
  // useEffect(() => {
  //   scrollComponent()
  // }, [  ])
  // const {slider, increment, decrement} = useIncrementDecrement()
  const [imageComponent, setImageComponent] = useState(null)

  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(!animation)
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
        <div  className={`modal__image animate__animated animate__${ animation ? 'fadeInRight' : 'fadeInLeft' }`}>
          <ModalImage slider={ slider } />
        </div>
        {/* <div  className="modal__image">
          {
            data.map(item => (
              <ModalImage values={ item }/>        
            ))
          }
        </div> */}
      <SliderControlsUser values={{ slider, increment, decrement, data }}/>

      </section>
  )
}
