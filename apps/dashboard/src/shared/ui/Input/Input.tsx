'use client';

import { TextField as InputUI } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const Input = forwardRef<
  ElementRef<typeof InputUI.Root>,
  ComponentPropsWithoutRef<typeof InputUI.Root>
>((props, ref) => {
  return (
    <InputUI.Root
      ref={ref}
      {...props}
    >
      <InputUI.Slot>icon before</InputUI.Slot>
      <InputUI.Slot>icon after</InputUI.Slot>
    </InputUI.Root>
  );
});

Input.displayName = 'Input';

export default Input;
