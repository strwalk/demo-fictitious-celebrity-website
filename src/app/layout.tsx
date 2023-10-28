import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import Header from './_components/header';
import Footer from './_components/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Fictitious Website',
    default: 'Demo',
  },
  description: 'Demonstration of fictitious celebrity website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="relative">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
