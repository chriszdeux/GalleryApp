import React from 'react'

import photo from '../../utils/temp/photo.jpg';
import photo2 from '../../utils/temp/photo2.jpeg';
import { MainGallery } from './MainGallery';
import { BiLeftArrow as Left, BiRightArrow as Right } from 'react-icons/bi' 

export const Main = () => {
  return (
    <>
    <main id="main">
      <figure className="hero__image">
        <img className="hero--image" src={ photo } alt="" />
      </figure>
      <figure className="hero__gallery">
          <img className="img--gallery--none" src={ photo2 } alt="" />
          <img className="img--gallery--active" src={ photo } alt="" />
          <img className="img--gallery--none" src={ photo2 } alt="" />
      </figure>
      <div className="main__info">
        <h3 className="sub--title">Some text</h3>
        <h1 className="title">Picture Title</h1>
        <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ducimus eveniet ipsum, dolor unde dolorem adipisci consequatur expedita veritatis quis ab perspiciatis aliquid labore explicabo facilis maiores, aspernatur cum. Ab.</p>
      </div>
      <div className="slider__controls">
        <Left className="left--icon" />
        <Right className="right--icon" />
      </div>
      <div className="bottom--fade"></div>
    </main>
    <MainGallery />
    </>
  )
}
