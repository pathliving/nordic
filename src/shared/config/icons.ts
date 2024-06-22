const icons = [
  {
    url: '/icons/16x16.png',
    type: 'image/png',
    sizes: '16x16',
  },
  {
    url: '/icons/32x32.png',
    type: 'image/png',
    sizes: '32x32',
  },
  {
    url: '/icons/144x144.png',
    type: 'image/png',
    sizes: '144x144',
  },
  {
    url: '/icons/192x192.png',
    type: 'image/png',
    sizes: '192x192',
  },
  {
    url: '/icons/512x512.png',
    type: 'image/png',
    sizes: '512x512',
  },
];

export const favicon = '/favicon.ico';
export const appleIcon = 'icons/apple-touch-icon.png';
export const metadataIcons = icons;
export const manifestIcons = icons.reduce(
  (acc, cur) => [...acc, { src: cur.url, type: cur.type, sizes: cur.sizes }],
  [
    { src: favicon, type: 'image/x-icon', sizes: 'any' },
    { src: appleIcon, type: 'image/png', sizes: '180x180' },
  ]
);
