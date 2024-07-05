import { app } from '@/shared/config/app';
import { manifestIcons } from '@/shared/config/icons';
import { PAGE_HOME } from '@/shared/constants/url';
import { defaultLocale } from '@/shared/i18n/config';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest & {
  screenshots: Array<{
    src: string;
    type?: string;
    sizes?: string;
    form_factor?: string;
    label?: string;
  }>;
} {
  return {
    name: app.title,
    short_name: app.title,
    description: app.description,
    start_url: PAGE_HOME,
    display: 'standalone',
    background_color: app.theme?.color,
    theme_color: app.theme?.color,
    lang: defaultLocale,
    icons: manifestIcons,
    screenshots: [
      {
        src: app.pwaImagePath.wide,
        sizes: '1280x720',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Homescreen of Nordic App',
      },
      {
        src: app.pwaImagePath.narrow,
        sizes: '720x1280',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Homescreen of Nordic App',
      },
    ],
  };
}
