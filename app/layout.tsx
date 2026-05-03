import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tatjanadevrnja.com'),

  title: {
    default: 'Tatjana Devrnja | Frontend Engineer',
    template: '%s | Tatjana Devrnja',
  },

  description:
    'Frontend Engineer with 4+ years of experience building high-performance web applications using React, Next.js and TypeScript. Specialized in e-commerce, headless CMS and premium UI.',

  keywords: [
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Developer',
    'Headless CMS',
    'WPGraphQL',
    'E-commerce',
  ],

  authors: [{ name: 'Tatjana Devrnja' }],

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'Tatjana Devrnja | Frontend Engineer',
    description:
      'Building fast, scalable and premium web experiences using React, Next.js and TypeScript.',
    url: 'https://tatjanadevrnja.com',
    siteName: 'Tatjana Portfolio',
    images: [
      {
        url: '/ogimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Tatjana Devrnja Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tatjana Devrnja | Frontend Engineer',
    description:
      'Building fast, scalable and premium web experiences using React, Next.js and TypeScript.',
    images: ['/ogimage.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
