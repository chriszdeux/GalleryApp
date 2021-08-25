import React from 'react'
import photo from '../../utils/temp/photo.jpg';
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
// import '../utils/icons';
import { AiFillCloseSquare as CloseIcon } from 'react-icons/ai'
export const ImageInfo = ( { handleToggle } ) => {
  // debugger
  return (
    <section className="modal__image__info">
      <CloseIcon 
        className="close--icon"
        onClick={ handleToggle }
      />
        {/* <div className="username"> */}
          {/* <figure className="username__profile__image">
            <img className="username--profile--image" src={ photo } alt="" />
          <h3 className="username--profile">username</h3>
          </figure> */}
        {/* </div> */}
        <div className="modal__image">
          <figure className="modal__image__container">
            
            <div className="user__name">
              <img className="username--profile--image" src={ photo } alt="" />
              <h3 className="username--profile">username</h3>
            </div>

            <img className="modal--image" src={ photo } alt="" />
            <h3 className="likes">likes: 1541 <LikeIcon className="like--icon"/></h3>
            {/* <LikeIcon /> */}
            <figcaption className="image--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti atque maxime. Provident, obcaecati iusto.</figcaption>
          </figure>
          <figure className="modal__image__container">
            
            <div className="user__name">
              <img className="username--profile--image" src={ photo } alt="" />
              <h3 className="username--profile">username</h3>
            </div>

            <img className="modal--image" src={ photo } alt="" />
            <h3 className="likes">likes: 1541 <LikeIcon className="like--icon"/></h3>
            {/* <LikeIcon /> */}
            <figcaption className="image--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti atque maxime. Provident, obcaecati iusto.</figcaption>
          </figure>
          

          {/* <div className="slider__controls">
            <Left className="left--icon"/>
            <Right className="right--icon"/>
          </div> */}
        </div>
      </section>
  )
}
