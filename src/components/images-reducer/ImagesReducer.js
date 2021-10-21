export const ImagesReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case 'add':
      let temp 
      if(state.includes(action.payload)) {
        temp = state.filter(item => item !== action.payload)
        // debugger
        return [ action.payload, ...temp ]
      } else {
        return [action.payload, ...state]
      }
      // debugger
    case 'del': return state.filter(item => item !== action.payload)
    default: return state
  }

  // return state
}