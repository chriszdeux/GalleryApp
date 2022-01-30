import React, { useContext, useEffect, useRef, useState } from 'react'

import photo from '../../utils/temp/photo.jpg';
import { DataContext } from '../context/DataContext';
import { useShowComponent } from '../hooks/useShowComponent';
import { Card } from './Card';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useFetchSearch } from '../hooks/useFetchSearch';
import { ImageInfo } from '../modal/ImageInfo';
export const MainGallery = () => {
  // debugger
  const [currentValue, setCurrentValue] = useState(0)
  const {  loading, handleData, handleEachData, transitionAnimation:{ fade_in }, handleSearchForm } = useContext( DataContext )
  const [newData, setNewData] = useState([])
  const isMounted = useRef(true)
  // debugger
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [ ])
  // useEffect(() => {
  //   handleEachData(data)
  // }, [ data ])
  
  // useEffect(() => {
  //   handleEachData(data)
  // }, [ data ])
  // const addCurrentValue = ( data ) => {
  //   return data.map(item => {
  //     setCurrentValue(currentValue + 1)
  //     debugger
  //     return setNewData([{
  //       ...item, current_value: currentValue
  //     }])
  //   })
  // }
  // debugger
  // useEffect(() => {
  //   handleEachData(data)
  // }, [ data ])
  const {handleToggle, toggle} = useShowComponent(false)
  const [handleIndex, setHandleIndex] = useState({
    index: '',
    id: ''
  });
// debugger
  const { index, id } = handleIndex
  // debugger
  return (
    <>
          {
            toggle && <ImageInfo values={ {handleToggle, index, id } }/>
          }
      <div className={ `main--gallery ${ fade_in }` } style={{ animationDelay: '.3s' }}>
        
        <LazyLoadComponent>
        {
          !!handleData && handleData.map((data, index) =>  
          (
              <Card 
                // handleToggle={ handleToggle }
                key={ data.id}
                values={{ data, index, handleToggle, toggle, setHandleIndex }}
                // data={ data }
                // onClick={ handleToggle }
                />
            )
            )
          }
        </LazyLoadComponent>
      </div>
    </>
  )
}
