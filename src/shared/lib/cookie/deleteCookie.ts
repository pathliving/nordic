import Cookie from 'js-cookie';

export const deleteCookie = (name: string) => Cookie.remove(name);
