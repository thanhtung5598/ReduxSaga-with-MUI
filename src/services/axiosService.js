import axios from 'axios';

class axiosService {
  constructor() {
    const instance = axios.create();
    axios.interceptors.response.use(this.handleSuccess, this.handleFailed);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }
  handleFailed(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new axiosService();
