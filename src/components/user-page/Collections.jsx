import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DataContext } from '../context/DataContext'
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'
import { useShowComponent } from '../hooks/useShowComponent'
import { ImageInfo } from '../modal/ImageInfo'
import { Collection } from './Collection'

export const Collections = () => {
  const { dataUser, dataCollection:{ data, load } } = useContext( DataContext )
  const { listCollection } = !!dataUser && dataUser;
  // const { position } = listCollection
  // debugger
  // const { slider, increment, decrement } =useIncrementDecrement( position )
  // debugger
  const { handleToggle, toggle } = useShowComponent()
  return (
    <>
    <div className="user__collections">
      {
        listCollection != undefined && 
        listCollection.map(item => (
          <Collection 
          key={item.id} 
          item={ item }
          onClick={ handleToggle }
          />
          ))
        }                  
      {/* <Collection />                  
      <Collection />                   */}
    </div>
      
    </>
      
  )
}
