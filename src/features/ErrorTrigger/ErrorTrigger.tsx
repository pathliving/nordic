'use client';

import { useState } from 'react';

export const ErrorTrigger = ({
  message = 'An error occurred',
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Trigger an error"
      onClick={() => setError(true)}
    >
      Bug
    </button>
  );
};
