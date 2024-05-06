import { Heading as HeadingUI } from '@radix-ui/themes';
import { ComponentPropsWithRef } from 'react';

export default function Heading(
  props: ComponentPropsWithRef<typeof HeadingUI>
) {
  return <HeadingUI {...props} />;
}
