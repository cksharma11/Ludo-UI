const { API_PORT = 4040 } = process.env;

const isWindow = () => {
  return process.browser;
};

const findElementFromObjectArray = (list = [], key, element) => {
  const elementList = list.filter((e) => e[key] === element);
  return elementList.length ? elementList[0] : {};
};

const parseCookie = (params) => {
  const pairList = params.split(';');
  const cookies = {};
  pairList.forEach((pair) => {
    const [key, value] = pair.trim().split('=');
    cookies[key] = value;
  });
  return cookies;
};

const POST_CALL_CONFIG = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const API_URL = process.env.API_HOST || `http://localhost:${API_PORT}`;

export {
  isWindow,
  parseCookie,
  POST_CALL_CONFIG,
  API_URL,
  findElementFromObjectArray
};
