import { Button as ButtonUI } from '@radix-ui/themes';
import { ComponentPropsWithRef } from 'react';

export default function Button(props: ComponentPropsWithRef<typeof ButtonUI>) {
  return <ButtonUI {...props} />;
}
