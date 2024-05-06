'use client';

import { TextField as InputUI } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const Input = forwardRef<
  ElementRef<typeof InputUI.Input>,
  ComponentPropsWithoutRef<typeof InputUI.Input>
>((props, ref) => {
  return (
    <InputUI.Root>
      <InputUI.Slot>icon before</InputUI.Slot>
      <InputUI.Input
        ref={ref}
        {...props}
      />
      <InputUI.Slot>icon after</InputUI.Slot>
    </InputUI.Root>
  );
});

Input.displayName = 'Input';

export default Input;
