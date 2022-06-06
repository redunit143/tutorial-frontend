const todoReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_ITEM':
      return state + 1;
    default:
      return state;
  }
}

export default todoReducer;