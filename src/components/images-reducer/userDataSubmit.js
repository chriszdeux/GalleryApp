export const userDataSubmit = ( data, dispatch ) => {
  const handleSaveUser = () => {
    dispatch({
      type: 'user-saved',
      payload: data
    })
  }

  return handleSaveUser
}