

const initialState = {
    list: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'Add_ToDo': 
        return {...state, list:[...state.list, action.payload]
        }
      default:
        return state
    }
  }
