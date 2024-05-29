'use client';

import Button from '@/shared/ui/Button/Button';
import Link from '@/shared/ui/Link/Link';

export default function Todo() {
  return (
    <div>
      <p>todo page</p>
      <Button onClick={() => {}}>Click me!</Button>
      <div>
        <Link href="/">Go to Home page</Link>
      </div>
    </div>
  );
}
