const { API_PORT = 4040 } = process.env;

const isWindow = () => {
  return process.browser;
};

const findElementFromObjectArray = ({ list = [], key, value }) => {
  const elementList = list.filter((e) => e[key] === value);
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

const API_URL = 'https://ludo-pc-api.herokuapp.com';
// eslint-disable-next-line no-console
console.log(
  'DEBUGGING ON REMOTE : WITH TEST VAR',
  API_URL,
  process.env.API_URL,
  process.env.TEST_VAR
);

module.exports = {
  isWindow,
  parseCookie,
  POST_CALL_CONFIG,
  API_URL,
  findElementFromObjectArray
};
