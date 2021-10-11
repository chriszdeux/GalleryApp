import { useState } from "react"

export const useShowComponent = ( value = false) => {
  const [showComponent, setShowComponent] = useState(value);
  const [toggle, setToggle] = useState(false)
  // debugger
  const handleShowComponent = () => {
    setShowComponent(!showComponent);
  }

  const handleToggle = () => {
    setToggle(!toggle)
    console.log('clicked')
  }

  // const handleShowImage = () => {

  // }

  return { showComponent, handleShowComponent, handleToggle, toggle }
}