export default class APIResponse {
    constructor(status, statusText, data, msgHandler, message) {
      this.data = data;
      this.msgHandler = msgHandler;
      this.status = status;
      this.statusText = statusText;
      this.message = message;
    }

    setData(data) {
      this.data = data;
    } 

    setMsgHandler(msgHandler) {
      this.msgHandler = msgHandler;
    }

    setStatus(status) {
      this.status = status;
    }

    setStatusText(statusText) {
      this.statusText = statusText;
    }

    setMessage(message) {
      this.message = message;
    }
  }