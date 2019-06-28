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

export { isWindow, parseCookie };
