import './globals.scss';

import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';

const inter = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kev McGrady',
  description: 'Web Development portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
