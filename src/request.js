import axios from 'axios';
export function createAxiosInstance() {
  return axios.create({
    baseURL: 'http://localhost:3004'
  });
}
