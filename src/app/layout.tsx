import type { Metadata, Viewport } from 'next';
import { Kanit, Outfit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Valence Athletic Club | High Performance Fitness & Coaching',
  description:
    'Valence Athletic Club is an elite performance fitness sanctuary combining world-class coaching, high-intensity conditioning, advanced strength equipment, and a dedicated athletic community.',
  openGraph: {
    title: 'Valence Athletic Club | High Performance Fitness & Coaching',
    description:
      'Valence Athletic Club is an elite performance fitness sanctuary combining world-class coaching, high-intensity conditioning, advanced strength equipment, and a dedicated athletic community.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05090D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${kanit.variable} ${outfit.variable}`}>
      <body className="bg-[#05090D] text-[#D9DEE3] selection:bg-[#F5223A] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
