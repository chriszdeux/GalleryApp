import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { Link } from 'react-router-dom';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';

export const ModalImage = React.memo (({ values }) => {
  const { slider, animation } = values
  // const { item:{ position, id, user:{ username } } } = values
  // debugger
  // const { position } = values
  // debugger
  const { transitionAnimation:{ fade_in } } = useContext(DataContext)
  const { data, setUserProfile, dispatch } = useContext(DataContext)
  // const { slider, increment, decrement } = useIncrementDecrement(position)
  // const { position } = item
  const { urls, color, blur_hash, description, user, likes } = data[slider]

  const { handleAdd } = ImagesSubmit(data[slider], dispatch)
  console.log(`showing more again`)
  // if(animation !== undefined) {
  //   debugger

  // }
  return (
    <>
    <figure
    // id={ username } 
    // ref={ goToComponent }
    className={`modal__image__container ${animation}`}>
      <Link to='./user-page'>
        <div 
          className={ `user__name ${fade_in}` }
          onClick={ () => setUserProfile(user.username) }
          // style={{ animationDelay: '1s ease' }}
        >
          <img 
            style={{ border: `3px solid ${color}` }}
            className="username--profile--image" src={ user.profile_image.medium } alt="" />
          <h3 className="username--profile">{ user.username }</h3>
        </div>
      </Link>

      <img className={`modal--image ${animation}`} src={ urls.regular } alt="" />
      <h3 className="likes">likes: { likes } <LikeIcon  onClick={ handleAdd } className="like--icon"/></h3>
      {/* <LikeIcon /> */}
      <figcaption 
        className="image--description"
        style={{ borderTop: `3px solid ${color}` }}
      >{ description }</figcaption>
    </figure>

      </>
  )
}
)