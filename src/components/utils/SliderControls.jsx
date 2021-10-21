import React from 'react'
import { BiLeftArrow as Left, BiRightArrow as Right } from 'react-icons/bi' 
import { useIncrementDecrement } from '../hooks/useIncrementDecrement'


export const SliderControls = ( { values } ) => {
  const {slider, increment, decrement, data, memoPrevImage, memoNextImage } = values
  // const { increment, decrement } = useIncrementDecrement()
  // debugger
  return (
    <div className="slider__controls">
      {
        slider > 0 &&
        <Left 
          className="left--icon"
          onClick={ memoPrevImage } 
        />
      }
      {
        slider < data.length - 1  &&
        <Right 
          className="right--icon"
          onClick={ memoNextImage } 
        />
      }
    </div>
  )
}
