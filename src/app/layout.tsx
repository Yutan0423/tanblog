import './globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['greek'] });

export const metadata = {
  title: 'tanblog',
  description: `tan's life and tech blog`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
