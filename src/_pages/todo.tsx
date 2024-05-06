'use client';

import Button from '@/shared/ui/Button/Button';
import Link from '@/shared/ui/Link/Link';
import Text from '@/shared/ui/Text/Text';
import type { dictionaryType } from '../../getDictionary';

export default function Todo({ dictionary }: { dictionary: dictionaryType }) {
  return (
    <div>
      <p>todo page</p>
      <Text as="p">{dictionary.textWelcome.welcome}</Text>
      <Button onClick={() => {}}>Click me!</Button>
      <div>
        <Link href="/">Go to Home page</Link>
      </div>
    </div>
  );
}
