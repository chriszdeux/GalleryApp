export const ImagesReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case 'add':
      const check = { ...action.payload, checked: true }
      const temp = [check, ...state]
      return temp
      // let temp;
      // const check = { ...action.payload, checked: true }
      // let temp = [check, ...state];

      // debugger
      // // const temp2 = state.filter(item => item.id !== check.id)
      // // debugger
      // return temp
      // if(state.includes(action.payload)) {
      //   let temp = [check, ...state]
      //   return temp
      // }

      // let tempState = [check, ...state]
      // return tempState
    case 'del': 
      // let tempDel = { ...action.payload, removeOption: false }
      return state.filter(item => item.id !== action.payload)
      default: return state
  }

  // return state
}