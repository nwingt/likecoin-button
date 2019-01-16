import * as axios from 'axios';

const options = {
  withCredentials: true,
  timeout: 5000,
};
// The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;
// }

const instance = axios.create(options);
export default instance;
