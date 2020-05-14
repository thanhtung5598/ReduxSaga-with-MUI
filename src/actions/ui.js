import * as types from './../constants/ui';

export const showLoading = () => ({
  type: types.SHOW_LOADING
});

export const hideLoading = () => ({
  type: types.HIDE_LOADING
});

export const toggleSidebar = value => ({
  type: types.TOGGLE_SIDEBAR,
  payload: value
});
