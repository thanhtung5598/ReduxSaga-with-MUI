import axiosService from './../services/axiosService';
import { API_ENTPOINT } from './../constants';

const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENTPOINT}/${url}`);
};

export const addTask = body => {
  return axiosService.post(`${API_ENTPOINT}/${url}`, body);
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202
};
