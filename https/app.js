import fetch from 'isomorphic-unfetch';

const makeCall = async (url, options) => {
  return fetch(url, options).then((res) => res);
};

const app = {
  get: async (url, options = {}) => {
    return makeCall(url, { ...options, method: 'GET' });
  },
  post: async (url, options = {}) => {
    return makeCall(url, { ...options, method: 'POST' });
  }
};

export default app;
