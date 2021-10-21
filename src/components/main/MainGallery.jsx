import React, { useContext, useEffect, useRef, useState } from 'react'

import photo from '../../utils/temp/photo.jpg';
import { DataContext } from '../context/DataContext';
import { useShowComponent } from '../hooks/useShowComponent';
import { Card } from './Card';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
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

  // debugger
  return (
    <>
      <section className="images__container container-9">
        {
          !!handleData && handleData.map((data, index) =>  
          (
            <>
            <LazyLoadComponent key={data.id}>
              <Card 
                // handleToggle={ handleToggle }
                key={ data.id }
                values={{ data, index }}
                // data={ data }
                // onClick={ handleToggle }
                />
            </LazyLoadComponent>
            </>
            )
          )
        }
      </section>
      {
      }
    </>
  )
}
