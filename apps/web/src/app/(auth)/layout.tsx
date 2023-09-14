'use client';

import type { Metadata } from 'next';
import ToastProvider from '../../providers/toast.provider';
import '@/styles/globals.css';
import useRedirectByUserCheck from '../../hooks/useRedirectByUserCheck';

// export const metadata: Metadata = {
//   title: 'Ecommerce api full',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { shouldLoadContent } = useRedirectByUserCheck(true);
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {shouldLoadContent && (
          <ToastProvider>
            <main>{children}</main>
          </ToastProvider>
        )}
      </body>
    </html>
  );
}
