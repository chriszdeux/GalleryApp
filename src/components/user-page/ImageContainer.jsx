import React, { useContext } from 'react'
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import  photo  from "../../utils/temp/photo.jpeg";
import { DataContext } from '../context/DataContext';
import { useShowComponent } from '../hooks/useShowComponent';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';
export const ImageContainer = ({item}) => {
  const { id, created_at, blur_hash, urls:{ thumb, small, regular, full, raw }  } = item
  // debugger
  const { dispatch } = useContext(DataContext)
  const { handleAdd } = ImagesSubmit(item, dispatch)
  const { handleShowComponent, showComponent } = useShowComponent()
  return (
    <figure className="image__container" >
      <LazyLoadImage className="image" src={ regular } alt={ created_at } />
      <LikeIcon 
        className="like--icon"
        onClick={ handleAdd }
      />
      {/* <div className="card--ribbon">New Photo</div> */}
      {/* <div className="icons__buttons">
        <LikeIcon className="like--icon" />
        <DislikeIcon className="dislike--icon" />
      </div> */}
    </figure>
  )
}
