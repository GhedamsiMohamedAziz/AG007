import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AG007',
  description: 'Infrastructure Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
