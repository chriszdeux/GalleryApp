import { useContext, useMemo, useState } from "react"
import { DataContext } from "../context/DataContext"
import { React } from 'react'
export const useIncrementDecrement = ( initialState = 0, component ) => {
  const { data, transitionAnimation } = useContext(DataContext)
  const { fade_in,
          fade_out,
          fade_up,
          fade_down,
          fade_left,
          fade_right, } = transitionAnimation;
  const [slider, setSlider] = useState(initialState)
  // const [entranceAnimations, setEntranceAnimations] = useState()
  console.log('calling again')
  // debugger
  const [animation, setAnimation] = useState()
  const [animateComponent, setAnimateComponent] = useState()
  // const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = entranceAnimations
  // debugger
  const increment = (  ) => {
    setSlider(slider + 1)
    setAnimation(fade_right)
    setTimeout(() => {
      setAnimation('')
      
    }, 1000);
    // setTimeout(() => {
      // }, 100);
      // setTimeout(() => {
        //   setAnimation(fade_left)
        //   // animateComponent()
        // }, 200);
        // setTimeout(() => {
          //   setAnimateComponent(component)
          // }, 300);
        }
        
  const decrement = (  ) => {
    setSlider(slider - 1)
    setAnimation(fade_left)
    // debugger
    setTimeout(() => {
      setAnimation('')
      
      }, 1000);
    }
    // debugger
    const memoNextImage = useMemo(() => increment, [slider])
    const memoPrevImage = useMemo(() => decrement, [slider])
  
  return { increment, decrement, slider, animation, animateComponent, memoNextImage, memoPrevImage }
}