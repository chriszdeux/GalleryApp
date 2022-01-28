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
  const { data, loading, handleData, handleEachData } = useContext( DataContext )
  const [newData, setNewData] = useState([])
  const goToComponent = useRef(null)
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
  useEffect(() => {
    handleEachData(data)
  }, [ data ])
  const {handleToggle, toggle} = useShowComponent(false)
  const [handleIndex, setHandleIndex] = useState({
    index: '',
    id: ''
  });

  const { index, id } = handleIndex
  // debugger
  return (
    <>
          {
            toggle && <ImageInfo values={ {handleToggle, index, id } }/>
          }
      <section className="main--gallery">
        
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
      </section>
    </>
  )
}
