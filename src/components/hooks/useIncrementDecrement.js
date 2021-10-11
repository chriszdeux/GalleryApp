import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import { React } from 'react'
export const useIncrementDecrement = ( initialState = 0, component ) => {
  const { data } = useContext(DataContext)
  const [slider, setSlider] = useState(initialState)
  const [entranceAnimations, setEntranceAnimations] = useState({
    fade_in: 'animate__animated animate__fadeIn',
    fade_out: 'animate__animated animate__fadeOut',
    fade_up: 'animate__animated animate__fadeInUp',
    fade_down: 'animate__animated animate__fadeIn',
    fade_left: 'animate__animated animate__fadeInLeft',
    fade_right: 'animate__animated animate__fadeInRight',
  })
  console.log('calling again')
  // debugger
  const [animation, setAnimation] = useState()
  const [animateComponent, setAnimateComponent] = useState()
  const { fade_in, fade_out, fade_up, fade_down, fade_left, fade_right } = entranceAnimations
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
  
  return { increment, decrement, slider, animation, animateComponent }
}