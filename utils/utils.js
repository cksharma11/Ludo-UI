const isWindow = () => {
  return process.browser;
};

const parseCookie = (params) => {
  const pairList = params.split(';');
  const cookies = {};
  pairList.forEach((pair) => {
    const [key, value] = pair.split('=');
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

export { isWindow, parseCookie, POST_CALL_CONFIG };
