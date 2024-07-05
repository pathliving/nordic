import '@/styles/colors.css';
import '@/styles/font.css';
import '@/styles/spacing.css';
import '@/styles/transition.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  options: {
    storySort: {
      order: ['Theme', 'Components'],
    },
  },
};

export default preview;
