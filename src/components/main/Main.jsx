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
  // debugger
  // FetchUser('xps')
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      currentPosition === data.length - 1 ? setCurrentPosition(0) : setCurrentPosition(currentPosition + 1) 
    }, 5000)
    
    return () => {
      clearInterval(sliderInterval)
    }
  }, [ currentPosition ])

  return (
    <>
      {
        !loading && 
        <>
          <main id="main">
        {/* !loading && */}
          {/* <h1>{ slider }</h1> */}
        <figure className="hero__image">
        <picture>
          <source media={ mediaQueries.tablet } srcSet={ data[currentPosition].urls.regular_image } />
          <source media={ mediaQueries.tablet_hd } srcSet={ data[currentPosition].urls.full_image } />
          <source media={ mediaQueries.desk_hd } srcSet={ data[currentPosition].urls.raw_image } />
            <img className="hero--image" src={ data[0].urls.small_image } alt="" />
        </picture>
      </figure>
      
      <figure className="hero__gallery">
          {/* <img className="img--gallery--none" src={ data[slider + 1].urls.regular_image } alt={ data[slider + 1].alt_description }
          placeholder={ data[slider + 1].blur_hash } /> */}
          <img className="img--gallery--active" src={ data[currentPosition].urls.regular_image } alt={ data[currentPosition].alt_description } placeholder={ data[currentPosition].blur_hash } />
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

      <SliderControls values={ {data, slider, increment, decrement} }/>

      <div className="bottom--fade"></div>
    </main>
    <MainGallery />
        </>
      }
    </>
  )
}
