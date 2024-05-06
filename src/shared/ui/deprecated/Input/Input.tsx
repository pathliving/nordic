import { TextArea as InputUI } from '@radix-ui/themes';
import { ComponentPropsWithRef } from 'react';

/**
 * @deprecated use Form components instead
 */
export default function Input(props: ComponentPropsWithRef<typeof InputUI>) {
  return <InputUI {...props} />;
}
