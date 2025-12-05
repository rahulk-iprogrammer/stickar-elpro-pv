import * as actionType from './actionTypes';

const initialState = {
	activeTab: 0,
	showLoader: false
};

const reducer = (state = initialState, action) => {
	if (action.type === actionType.CHANGE_TAB) {
		return {
			...state,
			activeTab: action.tab
		};
	}else if(action.type === actionType.SHOW_LOADER){
		return {
			...state,
			showLoader: action.loader
		};
	}
	return state;
};

export default reducer;
