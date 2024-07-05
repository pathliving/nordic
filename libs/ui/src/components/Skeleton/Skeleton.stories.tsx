import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

const ArticleTemplate = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s16)', borderColor: 'var(--secondary)', height: '140px', width: '400px' }}>
      <div style={{ display: 'flex', gap: 'var(--s16)' }}>
        <div style={{ flex: 'none' }}>
          <Skeleton appearance="circle" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s16)', width: '100%' }}>
          <Skeleton appearance="text" />
          <Skeleton appearance="text" />
        </div>
      </div>
      <Skeleton appearance="text" />
      <Skeleton appearance="text" />
    </div>
  )
}

export const Container: Story = (args: Story["args"]) => {
  return (
    <figure style={{ width: '450px', height: '200px' }}>
      <Skeleton appearance={args?.appearance ?? "text"} {...args} />
      <figcaption>assets/not-found-image.svg</figcaption>
    </figure>
  );
};
Container.args = {
  className: 'skeleton-container',
  appearance: "container",
}
Container.storyName = 'Image Skeleton';

export const ArticleSkeleton = () => {
  return (
    <ArticleTemplate />
  );
};
Container.storyName = 'Article Skeleton';
