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
  const { handleToggle, position, id} = values;
  // const goToComponent = useRef(id)
  // const { handleToggle, data:{ urls, color, blur_hash, description, user, likes }, position} = values;
  const { data } = useContext(DataContext )
  const { color } = data[position] 
  const [bgColor, setBgColor] = useState()
  const myRef = useRef()
  const [component, setComponent] = useState()
  const [entranceAnimations, setEntranceAnimations] = useState({
    fade_in: 'animate__animated animate__fadeIn',
    fade_out: 'animate__animated animate__fadeOut',
    fade_up: 'animate__animated animate__fadeInUp',
    fade_down: 'animate__animated animate__fadeIn',
    fade_left: 'animate__animated animate__fadeInLeft',
    fade_right: 'animate__animated animate__fadeInRight',
  })

  const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = entranceAnimations

  const {slider, increment, decrement, animation} = useIncrementDecrement( position )
  const memoIncrement = useMemo(() => increment, [ slider ])
  const memoDecrement = useMemo(() => decrement, [ slider ])
  // useEffect(() => {
  //   setComponent(
  //     // <div  className={`modal__image $`} ref={ myRef }>
  //     //   <ModalImage values={ {slider, animation} } />
  //     // </div>
  //     <h1>HELLO</h1>
  //   )
  //   return () => {
  //     cleanup()
  //   }
  // }, [  ])
  // debugger
  // const [entranceAnimations, setEntranceAnimations] = useState({
  //   fade_in: 'animate__animated animate__fadeIn',
  //   fade_out: 'animate__animated animate__fadeOut',
  //   fade_up: 'animate__animated animate__fadeInUp',
  //   fade_down: 'animate__animated animate__fadeIn',
  // })
  // const { fade_in, fade_out, fade_up, fade_down } = entranceAnimations

  // const [animation, setAnimation] = useState()
  // const [animateComponent, setAnimateComponent] = useState()
  
  // const handleEntranceAnimation = () => {
  //   setAnimation(fade_out)
  // }
  
  // const handleExitAnimation = () => {
  //   setTimeout(() => {
  //     setAnimation(fade_out)
  //   }, .300);
  // }

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

  // const [animation, setAnimation] = useState(false)

  // useEffect(() => {
  //   setAnimation(!animation)
  // }, [ position ])

  // debugger
  return (
    <section className={`modal__image__info ${fade_in}`}  >
      <CloseIcon 
        className="close--icon"
        onClick={ handleToggle }
      />
        {/* <div className="username"> */}
          {console.log('changed')
          /* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
        
        <div  className={`modal__image $`} ref={ myRef }>
        <ModalImage values={ {slider, animation} } />
      </div>
        {/* <div  className="modal__image">
          {
            data.map(item => (
              <ModalImage values={ item }/>        
            ))
          }
        </div> */}
      <SliderControlsUser values={{ slider, increment, decrement, data, memoIncrement, memoDecrement }}/>

      </section>
  )
}
