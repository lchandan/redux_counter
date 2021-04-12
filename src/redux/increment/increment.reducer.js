const INITIAL_STATE = {
  value: 0
};

const incrementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'INCREMENT':
        console.log("inside increment",state)
        return {
          ...state,
          value: action.payload
        }
      case 'DECREMENT':
        return {
          ...state,
          value: action.payload
        }
      default:
        return state
    }
  }

export default incrementReducer;