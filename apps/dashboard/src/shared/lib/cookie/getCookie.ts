import Cookie from 'js-cookie';

export const getCookie = (name: string) => Cookie.get(name);
