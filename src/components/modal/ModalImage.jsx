import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/DataContext'
// import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { FcLikePlaceholder as LikeIcon, FcLike as LikedIcon } from 'react-icons/fc'
import { SliderControls } from '../utils/SliderControls';
import { useIncrementDecrement } from '../hooks/useIncrementDecrement';
import { Link } from 'react-router-dom';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';
import { FiDelete as DeleteIcon } from 'react-icons/fi'
import { cleanup } from '@testing-library/react';

export const ModalImage = React.memo (({ values }) => {
  const { slider, animation } = values
  // const { item:{ position, id, user:{ username } } } = values
  // debugger
  // const { position } = values
  // debugger
  const { transitionAnimation:{ fade_in } } = useContext(DataContext)
  const { handleData, setUserProfile, dispatch, favImages } = useContext(DataContext)
  // debugger
  // const [addLike, setAddLike] = useState(handleData)
  // const { slider, increment, decrement } = useIncrementDecrement(position)
  // const { position } = item
  const { urls, color, blur_hash, description, user, likes, checked } = !!handleData && handleData[slider]
  // debugger
  const { handleAdd, handleDelete, handleRemove, setHandleRemove, handleLike } = ImagesSubmit(handleData[slider], dispatch)
  console.log(`showing more again`)
  // const [handleAddOption, setHandleAddOption] = useState(handleRemove)
  // if(animation !== undefined) {
    // debugger



  // }
  // debugger
  // const [handleLike, setHandleLike] = useState(false)

  // useEffect(() => {
  //   const temp = setHandleRemove()
  //   return () => {
  //     cleanup(temp)
  //   }
  // }, [slider])
  // const handleLike = () => 
  // const handleRemoveOption = ( handle ) => {
  //   handle ? setHandleAddOption(false) :setHandleAddOption(true)
  // }


  // useEffect(() => {
  //   handleRemoveOption(removeOption)
  // }, [ slider ])

  // useEffect(() => {
  //  const temp = setHandleAddOption(

  //     !handleRemove
  //       ? <LikeIcon  onClick={ handleAdd } className="like--icon"/>
  //       : <DeleteIcon className="like--icon" onClick={ handleDelete }/>

  //   )
  // const [handleLike, setHandleLike] = useState()
  // useEffect(() => {
  //   const temp = setHandleLike()
  //   return () => {
  //     cleanup(temp)
  //   }
  // }, [slider])
  //   return () => {
  //     cleanup(temp)
  //   }
  // }, [ slider ])
  // debugger
  return (
    <>
      <Link to='./user-page' className="user--redirect">
        <div 
          className={ `user__name ${fade_in}` }
          onClick={ () => setUserProfile(user.username) }
          // style={{ animationDelay: '1s ease' }}
        >
          {
            user &&
            <>
            <img 
            style={{ border: `3px solid ${color}` }}
            className="username--profile--image" src={ user.profile_image.medium } alt="" />
          <h3 className="username--profile">{ user.username }</h3>
            </>
          }
        </div>
      </Link>
    <figure
    // id={ username } 
    // ref={ goToComponent }
    className={`modal__image__container ${animation}`}>

      <img className={`modal--image ${animation}`} src={ urls.regular } alt="" />
      <h3 className="likes">likes: { likes }
      {
        checked 
          ? <DeleteIcon onClick={ handleDelete } className="delete--icon"/>
          :<LikeIcon  onClick={  handleAdd } className={` like--icon  `}/>
      }
      
      </h3>
      {/* <LikeIcon /> */}
      {
        user && 
        <figcaption 
          className="image--description"
          style={{ borderTop: `3px solid ${color}` }}
        >
          { description }
        </figcaption>
      }
    </figure>
    
    {
      handleLike && 
      <div className="liked__container">
        <LikedIcon className="liked--icon"/>
      </div>
    }
      </>
  )
}
)