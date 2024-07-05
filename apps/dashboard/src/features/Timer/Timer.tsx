'use client';

import Heading from '@/shared/ui/Heading/Heading';
import { ReactNode, useEffect, useState } from 'react';
import * as s from './Timer.css';

const Timer = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setTime(100), 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <Heading as="h2" className={s.timer}>
      {children} - {time}
    </Heading>
  );
};

export default Timer;
