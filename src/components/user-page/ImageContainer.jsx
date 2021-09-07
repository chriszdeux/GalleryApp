import React from 'react'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';

import  photo  from "../../utils/temp/photo.jpeg";
export const ImageContainer = ({item}) => {
  const { id, created_at, blur_hash, urls:{ thumb, small, regular, full, raw }  } = item
  // debugger
  return (
    <figure className="image__container">
      <img className="grid--image" src={ regular } alt={ created_at } />

      <LikeIcon className="like--icon"/>
      {/* <div className="card--ribbon">New Photo</div> */}
      {/* <div className="icons__buttons">
        <LikeIcon className="like--icon" />
        <DislikeIcon className="dislike--icon" />
      </div> */}
    </figure>
  )
}
