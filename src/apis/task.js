import axiosService from './../services/axiosService';
import { API_ENTPOINT } from './../constants';
import qs from 'query-string';

const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENTPOINT}/${url}${queryParams}`);
};

export const addTask = body => {
  return axiosService.post(`${API_ENTPOINT}/${url}`, body);
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202
};
