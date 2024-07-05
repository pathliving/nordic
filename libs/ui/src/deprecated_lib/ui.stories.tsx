import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { UiShared } from './ui';

const meta: Meta<typeof UiShared> = {
  component: UiShared,
  title: 'UiShared',
};
export default meta;
type Story = StoryObj<typeof UiShared>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  // eslint-disable-next-line @typescript-eslint/require-await
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    expect(canvas.getByText(/Welcome to UiShared!/gi)).toBeTruthy();
  },
};
