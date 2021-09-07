export const ImagesReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case 'add': return [action.payload, ...state]
  
    default: return state
  }

  // return state
}