import * as types from './../../constants/ui';

const initialState = {
  showLoading: false,
  showSidebar: true
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true
      };
    }
    case types.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false
      };
    }
    case types.TOGGLE_SIDEBAR: {
      return {
        ...state,
        showSidebar: action.payload
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
