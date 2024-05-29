import Cookie from 'js-cookie';

export const setCookie = (
  name: string,
  value: string,
  options?: (typeof Cookie)['attributes']
) => Cookie.set(name, value, options);
