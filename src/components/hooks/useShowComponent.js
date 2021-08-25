import { useState } from "react"

export const useShowComponent = ( value = false) => {
  const [showComponent, setShowComponent] = useState(value);
  const [toggle, setToggle] = useState(value)
  // debugger
  const handleShowComponent = (value) => {
    setShowComponent(value);
  }

  const handleToggle = () => {
    setToggle(!toggle)
    console.log('clicked')
  }

  // const handleShowImage = () => {

  // }

  return { showComponent, handleShowComponent, handleToggle, toggle }
}