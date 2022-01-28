import React, { createElement, useContext, useEffect, useState } from 'react'

import photo from '../../utils/temp/photo.jpg';
import photo2 from '../../utils/temp/photo2.jpeg';
import { MainGallery } from './MainGallery';
import { DataContext } from '../context/DataContext';
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { FetchUser } from '../../fetching-data/FetchUser';
import { LoadingComponent } from '../loading/LoadingComponent';
import { cleanup } from '@testing-library/react';

export const Main = () => {
  
  // const [currentPosition, setSlider] = useState(0)
  const { data, loading, mediaQueries,  handleData, 
    handleEachData,} = useContext( DataContext )
  const { slider, increment, decremen, transitionAnimation } = useIncrementDecrement(0)
  // const { id, color, urls } = !loading && data
  // debugger
  const [currentPosition, setCurrentPosition] = useState(0)
  useEffect(() => {
      handleEachData(data)
  }, [data])

  useEffect(() => {
    setCurrentPosition(0)
  }, [ data ])
// debugger
  // const [entranceAnimations, setEntranceAnimations] = useState({
  //   fade_in: 'animate__animated animate__fadeIn',
  //   fade_out: 'animate__animated animate__fadeOut',
  //   fade_up: 'animate__animated animate__fadeInUp',
  //   fade_down: 'animate__animated animate__fadeIn',
  //   fade_left: 'animate__animated animate__fadeInLeft',
  //   fade_right: 'animate__animated animate__fadeInRight',
  // })
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


  const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = transitionAnimation
  // debugger
  // FetchUser('xps')
  useEffect(() => {
    // if(handleData.length > 0) {
    setAnimation(fade_in)
    setAnimation2(fade_in)
    setTimeout(() => {
      setAnimation(fade_out)
      setAnimation2(fade_out)
    }, 3000);


    const sliderInterval = setInterval(() => {
      currentPosition === handleData.length - 3 ? setCurrentPosition(0) : setCurrentPosition(currentPosition + 1) 
      // console.log(`datalength: ${handleData.length} --- current:${currentPosition} --- nextCurrent:${currentPosition + 1} --- afterNextCurrent: ${currentPosition + 2}`)
    }, 6000)
    
    return () => {
      // console.log('cleaned')
      clearInterval(sliderInterval)
    }
    // }
  }, [ currentPosition ])
  // const [position, setPosition] = useState(0)
  const handleCurrentPosition = (position) => {
    if(handleData.length > 0){
      if(position > handleData.length) {
        setCurrentPosition(0)
      } else if(currentPosition < 0 ) {
        setCurrentPosition(handleData.length)
      }
    }
  }
  useEffect(() => {
    const currentImagePosition = handleCurrentPosition(currentPosition)
    return () => {
      cleanup(currentImagePosition)
      // cleanup(currentImagePosition)
    }
  }, [currentPosition])
  // debugger
  // if(currentPosition === data.length - 2) {
  //   debugger
  // }
  // console.log
  // debugger
  return (
    <>
      {
        handleData.length <= 0
        ? <LoadingComponent />
        : 
        <>
          <main id="main">
        {/* !loading && */}
          {/* <h1>{ currentPosition }</h1> */}
          <figure className={ `hero__image ${animation}` }>
            <picture>
              <source media={ mediaQueries.tablet } srcSet={ handleData[currentPosition].urls.regular } />
              <source media={ mediaQueries.tablet_hd } srcSet={ handleData[currentPosition].urls.regular } />
              <source media={ mediaQueries.desk_hd } srcSet={ handleData[currentPosition].urls.full } />
                <img className="hero--image" src={ handleData[currentPosition].urls.regular } alt="" />
            </picture>
          </figure>
      
      <figure className="hero__gallery">
          {/* <img className="img--gallery--none" 
          src={ data[currentPosition + 1].urls.regular_image } 
          alt={ data[currentPosition + 1].alt_description }
          placeholder={ data[currentPosition + 1].blur_hash } />
           */}
          
          <img className={ `img--gallery--none ${animation2}` } src={ !!handleData && handleData[currentPosition + 1].urls.regular } alt={ handleData[currentPosition + 1].alt_description } placeholder={ handleData[currentPosition + 1].blur_hash } style={{
            animationDelay: '1s'
          }} />

          <img className={ `img--gallery--active ${animation2}` } src={ !!handleData && handleData[currentPosition].urls.regular } alt={ handleData[currentPosition].alt_description } placeholder={ handleData[currentPosition].blur_hash }  />
          
          <img className={ `img--gallery--none ${animation2}` } src={ !!handleData && handleData[currentPosition + 2].urls.regular } alt={ handleData[currentPosition + 2].alt_description } placeholder={ handleData[currentPosition + 2].blur_hash } style={{
            animationDelay: '2s'
          }} />
          {
            // currentPosition <= data.length - 3 && 
          }
      </figure>
      <div className="main__info">
        {/* <h3 className="sub--title">{ currentPosition + 1}/{ handleData.length }</h3>
        <h3 className="sub--title">{ data[currentPosition].created }</h3>
        <h1 className="title">{ !!handleData && handleData[currentPosition].alt_description }</h1> */}
        <p className="info">{ !!handleData && handleData[currentPosition].description }</p>
      </div>

      {/* <SliderControls values={ {data, currentPosition, increment, decrement} }/> */}

      <div className="bottom--fade"></div>
    </main>
    <MainGallery />
        </>
      }
    </>
  )
}
