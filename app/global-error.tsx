'use client';

import { font } from '@/shared/lib/font/font';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('GlobalError mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('GlobalError unmounted');
    };
  }, []);

  const resetHandler = () => {
    // eslint-disable-next-line no-console
    console.log('Attempting to recover from error');
    reset();
  };

  const handleRefresh = () => {
    // eslint-disable-next-line no-console
    console.log('Refreshing the page');
    window.location.reload();
  };

  return (
    <html lang="en">
      <body className={font.className}>
        <div>
          <h2>{'Something went wrong!'}</h2>
          <div>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                resetHandler
              }
            >
              Try again
            </button>
            <div>
              <span>or</span>
            </div>
            <button
              onClick={
                // Reload the page
                handleRefresh
              }
            >
              Reload the page
            </button>
          </div>

          <p id="error">{`Global error: ${error?.message}`}</p>
          {error?.digest && <p id="digest">{error?.digest}</p>}
        </div>
      </body>
    </html>
  );
}
