import { useState } from "react"

export const useIncrementDecrement = ( initialState = 0 ) => {
  
  const [slider, setSlider] = useState(initialState)
  
  const increment = (  ) => {
    setSlider(slider + 1)
  }
  
  const decrement = (  ) => {
    setSlider(slider - 1)
  }
  
  return { increment, decrement, slider }
}