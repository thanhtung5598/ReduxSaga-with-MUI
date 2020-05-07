import axiosService from './../services/axiosService';
import { API_ENTPOINT } from './../constants';

const url = '/tasks';

export const getList = () => {
  return axiosService.get(`${API_ENTPOINT}${url}`);
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATEDl: 201,
  UPDATE: 202
};
