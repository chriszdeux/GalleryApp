import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataContext'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { Link } from 'react-router-dom';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';

export const ModalImage = ({ slider }) => {
  
  // const { item:{ position, id, user:{ username } } } = values
  // debugger
  // const { position } = values
  // debugger
  const { data, setUserProfile, dispatch } = useContext(DataContext)
  // const { slider, increment, decrement } = useIncrementDecrement(position)
  // const { position } = item
  const { urls, color, blur_hash, description, user, likes } = data[slider]

  const { handleAdd } = ImagesSubmit(data[slider], dispatch)
  // debugger
  // debugger
  // const selection = document.querySelector(`#${username}`)
  // debugger
  // const scrollComponent = () => {
  //   window.scrollTo({
  //     top: goToComponent.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  //   // debugger
  // }
  // useEffect(() => {
  //   scrollComponent()
  // }, [ position ])
  // const goTo = useRef(item.id)

  // const scrollTo = item.id
  // const scrollToComponent = ( id ) => {
  //   window.scrollTo({
  //     top: scrollTo.current.offSetTop,
  //     behavior: 'smooth'
  //   })
  // }
  

  // useEffect(() => {
    //   scrollToComponent(scrollTo)
  // }, [])

  return (
    <>
    <figure
    // id={ username } 
    // ref={ goToComponent }
    className="modal__image__container animate__animated animate__fadeInRight">
      <Link to='./user-page'>
      <div 
        className="user__name"
        onClick={ () => setUserProfile(user.username) }
      >
        <img 
          style={{ border: `3px solid ${color}` }}
          className="username--profile--image" src={ user.profile_image.medium } alt="" />
        <h3 className="username--profile">{ user.username }</h3>
      </div>
        </Link>

      <img className="modal--image" src={ urls.regular_image } alt="" />
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
