import axios from "axios";

const fakeApi = axios.create();

fakeApi.interceptors.request.use((config) => {
  if (config.url === '/api/register' && config.method === 'post') {
    config.adapter = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              id: 1,
              token: 'fake-jwt-token',
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config
          });
        }, 1000);
      });
    };
  }
  
  return config;
});

export default fakeApi;