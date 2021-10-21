import { useState } from "react"

export const useShowComponent = ( value = false) => {
  const [showComponent, setShowComponent] = useState(value);
  const [toggle, setToggle] = useState(false)
  // debugger
  const [ openComponent, setOpenComponent ] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(0)
  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  }

  const handleToggle = () => {
    setToggle(!toggle)
    console.log('clicked')
  }

  const handleModalPosition = (position) => {
    setSliderPosition(position)
    setOpenComponent(!openComponent)
  }
  // const handleShowImage = () => {

  // }

  return { showComponent, handleShowComponent, handleToggle, toggle, handleModalPosition, sliderPosition, openComponent}
}