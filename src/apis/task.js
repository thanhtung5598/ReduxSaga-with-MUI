import axiosService from './../services/axiosService';
import { API_ENTPOINT } from './../constants';

const url = '/tasks';

export const getList = () => {
  return axiosService.get(`${API_ENTPOINT}${url}`);
};
