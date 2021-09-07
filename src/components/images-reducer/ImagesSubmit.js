export const ImagesSubmit = (data, dispatch) => {
  // debugger
  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: data
    })
  }

  return {handleAdd}
}