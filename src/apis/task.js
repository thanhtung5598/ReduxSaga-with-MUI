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

// http://localhost:7000/tasks Method: Post
export const addTask = body => {
  return axiosService.post(`${API_ENTPOINT}/${url}`, body);
};

// http://localhost:7000/tasks/:id Method: Put
export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENTPOINT}/${url}/${taskId}`, data);
};

// http://localhost:7000/tasks/:id Method: Delete
export const deleteTask = taskId => {
  return axiosService.delete(`${API_ENTPOINT}/${url}/${taskId}`);
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202
};
