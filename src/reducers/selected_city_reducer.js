function selectedCityReducer(state, action) {

	if (state === undefined) {
	  return null;
	}

	if (action.type === 'SELECT_CITY') {
	  return action.payload;
	}
	
	return state;
}

export default selectedCityReducer;