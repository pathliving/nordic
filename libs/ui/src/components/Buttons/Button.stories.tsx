import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    className: 'btn-primary',
    size: "m",
    appearance: "primary",
    type: "button",
    leftIcon: '',
    rightIcon: '',
    loader: '',
    isLoading: false,
    disabled: false,
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    appearance: "secondary",
  },
};

export const PrimaryLoading = (args: Partial<typeof Primary.args>) => {
  const [isLoading, setLoading] = useState(args?.isLoading);

  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Button onClick={handleClick} loader="wait ..." isLoading={isLoading}>
      Button
    </Button>
  );
};

PrimaryLoading.args = {
  isLoading: true,
};

export const LeftIcon = {
  args: {
    ...Primary.args,
    children: "Activate",
    leftIcon: "⚡️",
  },
};

export const RightIcon = {
  args: {
    ...Primary.args,
    children: "Deactivate",
    rightIcon: "⚡️",
  },
};

export const Small = {
  args: {
    ...Primary.args,
    size: "s",
  },
};

export const Medium = {
  args: {
    ...Primary.args,
    size: "m",
  },
};

export const Large = {
  args: {
    ...Primary.args,
    size: "l",
  },
};
