import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nordic',
    short_name: 'Nordic',
    description: 'Experimental project',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        type: 'image/x-icon',
        sizes: 'any',
      },
      {
        src: '/favicon.svg',
        type: 'image/svg',
      },
      {
        src: '/16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        src: '/32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        src: '/192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  };
}
