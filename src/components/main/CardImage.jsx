import React from 'react';
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';

import photo from '../../utils/temp/photo.jpeg';

export const CardImage = () => {
  return (
    <figure className="small__card">
      <img className="small--image--card" src={ photo } alt="" />
      <div className="card--ribbon">New Photo</div>
      <div className="icons__buttons">
        <LikeIcon className="like--icon" />
        <DislikeIcon className="dislike--icon" />
      </div>
    </figure>
  )
}
