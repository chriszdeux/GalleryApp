import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useShowComponent } from '../hooks/useShowComponent'
import { ModalFavImages } from './ModalFavImages'
import { FiDelete as DeleteIcon } from 'react-icons/fi';
import { Card } from '../main/Card';

export const MyMasonry = ({favImages }) => {
  // const { favImages } = values;
  // debugger
  // const { showComponent, handleShowComponent } = useShowComponent()
  const { handleModalPosition, sliderPosition, openComponent } = useShowComponent()
  return (
    <>
    <div 
          className="images__container "
    // style={{ columns: columnCount, gap: gap }}
    >
      {
        favImages.map((data, index) => (
          // <figure 
          //   key={ item.id }
          //   onClick={ () => handleModalPosition(index) }
          //   className="image__container"  
          // >
          //   <LazyLoadImage className="image" src={item.urls.regular} alt="" />
          //   {/* <DeleteIcon className="delete--icon"/> */}

          // </figure>
          <Card key={ index } values={{ data, index }}/>
        ))
      }
    </div>
    {
      openComponent &&
      <ModalFavImages values={{ sliderPosition, favImages, handleModalPosition }}/>
    }
          </>
  )
}
