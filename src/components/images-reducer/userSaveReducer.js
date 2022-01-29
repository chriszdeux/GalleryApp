export const userSaveReducer = ( state = {  }, action ) => {
  debugger
  switch (action.type) {
    case 'user--saved':
      return {...action.payload}
  
    default:
      return state
  }
}