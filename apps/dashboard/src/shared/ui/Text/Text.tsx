import { Text as TextUI } from '@radix-ui/themes';
import React, { forwardRef } from 'react';

const Text = forwardRef<
  React.ElementRef<typeof TextUI>,
  React.ComponentPropsWithoutRef<typeof TextUI>
>((props, ref) => <TextUI {...props} ref={ref} />);

Text.displayName = TextUI.displayName;

export default Text;
