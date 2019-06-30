import fetch from 'isomorphic-unfetch';
import { POST_CALL_CONFIG } from '../utils/utils';

const makeCall = async (url, options) => {
  return fetch(url, options).then((res) => res.json());
};

const app = {
  get: async (url, options = {}) => {
    return makeCall(url, { ...options, method: 'GET' });
  },
  post: async (url, options = {}) => {
    return makeCall(url, {
      ...options,
      ...POST_CALL_CONFIG
    });
  }
};

export default app;
