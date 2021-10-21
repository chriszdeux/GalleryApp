import React, { useContext } from 'react';
import { BiDislike as DislikeIcon, BiLike as LikeIcon  } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photo from '../../utils/temp/photo.jpeg';
import { DataContext } from '../context/DataContext';
import { useShowComponent } from '../hooks/useShowComponent';
import { ImagesSubmit } from '../images-reducer/ImagesSubmit';
import { ImageInfo } from '../modal/ImageInfo';

export const CardImage = ( {values} ) => {
  // debugger
  const { data, index } = values;
  const { urls:{ thumb, small, regular, full, raw } } = data
  const { dispatch, mediaQueries } = useContext(DataContext);
  const { tablet, tablet_hd, desk, desk_hd, full_hd } = mediaQueries
  const { handleAdd } = ImagesSubmit(data, dispatch)
  // debugger
  const {handleToggle, toggle} = useShowComponent(false)

  return (
  <>
    <figure 
      className="small__card"
      onClick={ handleToggle }
    >
      <picture className="image__resolution__selection">
        <source media={ tablet_hd } srcSet={ regular } />
        <source media={ desk_hd } srcSet={ full } />
        <source media={ full_hd } srcSet={ raw } />
      <LazyLoadImage effect="blur" className="small--image--card" src={ regular } alt="" />
      </picture>
      {/* <div className="card--ribbon">New Photo</div> */}
      {/* <div className="icons__buttons">
        <LikeIcon className="like--icon" onClick={ handleAdd }/>
        <DislikeIcon className="dislike--icon" />
      </div> */}
    </figure>
    {
      toggle && <ImageInfo values={ {handleToggle, index } }/>
    }
    </>
  )
}
