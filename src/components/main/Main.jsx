import React, { createElement, useContext, useEffect, useState } from 'react'

import photo from '../../utils/temp/photo.jpg';
import photo2 from '../../utils/temp/photo2.jpeg';
import { MainGallery } from './MainGallery';
import { DataContext } from '../context/DataContext';
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { FetchUser } from '../../fetching-data/FetchUser';

export const Main = () => {
  
  // const [slider, setSlider] = useState(0)
  const { data, loading, mediaQueries } = useContext( DataContext )
  const { slider, increment, decrement } = useIncrementDecrement(0)
  // const { id, color, urls } = !loading && data
  // debugger
  const [currentPosition, setCurrentPosition] = useState(0)

  const [entranceAnimations, setEntranceAnimations] = useState({
    fade_in: 'animate__animated animate__fadeIn',
    fade_out: 'animate__animated animate__fadeOut',
    fade_up: 'animate__animated animate__fadeInUp',
    fade_down: 'animate__animated animate__fadeIn',
    fade_left: 'animate__animated animate__fadeInLeft',
    fade_right: 'animate__animated animate__fadeInRight',
  })
  const [animation, setAnimation] = useState()
  const [animation2, setAnimation2] = useState()
  // const handleEntranceAnimation = () => {
  //   setTimeout(() => {
  //     setAnimation(fade_in)
  //   }, .300);
  // }
  
  // const handleExitAnimation = () => {
  //   setTimeout(() => {
  //     setAnimation(fade_out)
  //   }, .300);
  // }


  const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = entranceAnimations
  // debugger
  // FetchUser('xps')
  useEffect(() => {
    setAnimation(fade_in)
    setAnimation2(fade_in)
    setTimeout(() => {
      setAnimation('')
      setAnimation2('')
    }, 1000);
    const sliderInterval = setInterval(() => {
      currentPosition === data.length - 1 ? setCurrentPosition(0) : setCurrentPosition(currentPosition + 1) 
    }, 5000)
    
    return () => {
      console.log('cleaned')
      clearInterval(sliderInterval)
    }
  }, [ currentPosition ])
  // debugger
  return (
    <>
      {
        !loading && 
        <>
          <main id="main">
        {/* !loading && */}
          {/* <h1>{ slider }</h1> */}
        <figure className={ `hero__image ${animation}` }>
        <picture>
          {/* <source media={ mediaQueries.tablet } srcSet={ data[currentPosition].urls.regular } /> */}
          <source media={ mediaQueries.tablet_hd } srcSet={ data[currentPosition].urls.regular } />
          <source media={ mediaQueries.desk_hd } srcSet={ data[currentPosition].urls.full } />
            <img className="hero--image" src={ data[currentPosition].urls.regular } alt="" />
        </picture>
      </figure>
      
      <figure className="hero__gallery">
          {/* <img className="img--gallery--none" src={ data[slider + 1].urls.regular_image } alt={ data[slider + 1].alt_description }
          placeholder={ data[slider + 1].blur_hash } /> */}
          <img className={ `img--gallery--active ${animation2}` } src={ data[currentPosition].urls.regular } alt={ data[currentPosition].alt_description } placeholder={ data[currentPosition].blur_hash } />
          {/* {
            slider < data.length && 
            <img className="img--gallery--none" src={ data[slider + 2].urls.regular_image } alt={ data[slider + 2].alt_description }
          placeholder={ data[slider + 2].blur_hash }
          /> */}
          {/* <figcaption> { currentPosition + 1 } / { data.length }</figcaption> */}
      </figure>
      <div className="main__info">
        <h3 className="sub--title">{ currentPosition + 1}/{ data.length }</h3>
        {/* <h3 className="sub--title">{ data[currentPosition].created }</h3> */}
        <h1 className="title">{ data[currentPosition].alt_description }</h1>
        <p className="info">{ data[currentPosition].description }</p>
      </div>

      {/* <SliderControls values={ {data, slider, increment, decrement} }/> */}

      <div className="bottom--fade"></div>
    </main>
    <MainGallery />
        </>
      }
    </>
  )
}
