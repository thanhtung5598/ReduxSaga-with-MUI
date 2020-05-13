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
  post(url, body) {
    return this.instance.post(url, body);
  }
  put(url, body) {
    return this.instance.put(url, body);
  }
  delete(url) {
    return this.instance.delete(url);
  }
}

export default new axiosService();
