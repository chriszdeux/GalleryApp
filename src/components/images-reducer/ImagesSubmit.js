import { useState } from "react";

export const ImagesSubmit = (data, dispatch) => {
  // debugger
  const { removeOption } = data;
  const [handleRemove, setHandleRemove] = useState(removeOption)

  // const [handleAddOption, setHandleAddOption] = useState(handleRemove)
  // // if(animation !== undefined) {
  //   // debugger

  // // }

  // const handleRemoveOption = ( handle ) => {
  //   hanlde ? setHandleAddOption(false) :setHandleAddOption(true)
  // }
  const [handleLike, setHandleLike] = useState(false)

  const handleLikeComponent = () => {
    setHandleLike(true)
    setTimeout(() => {
      setHandleLike(false)
    }, 3000);
  }

  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: data,
    })

    setHandleRemove({
      ...data,
      removeOption: handleRemove
    })
    handleLikeComponent()

    // debugger


    // debugger
  }



  const handleDelete = () => {
    // debugger
    dispatch({
      type: 'del',
      payload: data.id, 
    })
    setHandleRemove(!handleRemove)

  }

  return {handleAdd, handleDelete, handleRemove, setHandleRemove, handleLike}
}