import axios from 'axios';
import APIResponse from '../network/APIResponse';
import { ViewUtils } from '../utils/ViewUtils';
import MessageResponse from '../uiutils/MessageResponse';

class API {
  constructor() {
    let service = axios.create({
      baseURL: "https://api.producthunt.com/v1/",
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': 'Bearer YR64Kx1ZG1Lw48g3YpkGrf_Eiru09iZXSVHOj_kr9VY'
      }
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    let apiResponse = new APIResponse();
    apiResponse.setData(response.data);
    apiResponse.setStatus(response.status);
    apiResponse.setStatusText(response.statusText);
    return apiResponse;
  }

  handleError(error) {
    let apiResponse = new APIResponse();
    if (error.response !== undefined) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('authkey');
              error.config.headers.Authorization = 'Bearer YR64Kx1ZG1Lw48g3YpkGrf_Eiru09iZXSVHOj_kr9VY';
              error.config.__isRetryRequest = true;
              return this.service.request(error.config)
        default:
          apiResponse.setStatus(error.response.status);
          apiResponse.setStatusText(error.response.statusText);
          return apiResponse;
      }
    }
    apiResponse.setMessage(error.message);
    apiResponse.setMsgHandler(ViewUtils.createMessageHandler(error.message, MessageResponse.ERROR));
    return apiResponse;
  }

  get(path, callbackSuccess, callbackError) {
    return this.service.get(path)
    .then((response) => {
      if (response.status === 200) {
        callbackSuccess(response);
      } else {
        callbackError(response);
      }
    });
  }

  post(path, callbackSuccess, callbackError) {
    return this.service.post(path)
    .then((response) => {
      if (response.status === 201) {
        callbackSuccess(response);
      } else {
        callbackError(response);
      }
    });
  }
}

export default new API();
