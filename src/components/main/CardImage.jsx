import React, { useContext } from 'react';
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photo from '../../utils/temp/photo.jpeg';
import { DataContext } from '../context/DataContext';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';

export const CardImage = ({ data }) => {
  const { urls } = data
  const { dispatch } = useContext(DataContext)
  const { handleAdd } = ImagesSubmit(data, dispatch)
  // debugger
  return (
    <figure className="small__card">
      <LazyLoadImage effect="blur" className="small--image--card" src={ urls.regular_image } alt="" />
      {/* <div className="card--ribbon">New Photo</div> */}
      <div className="icons__buttons">
        <LikeIcon className="like--icon" onClick={ handleAdd }/>
        <DislikeIcon className="dislike--icon" />
      </div>
    </figure>
  )
}
