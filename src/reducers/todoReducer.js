const todoReducer = (state = 0, action) => {
	switch(action.type) {
		case 'addItem':
			return state + 1;
		default:
			return state;
	}
}

export default todoReducer;