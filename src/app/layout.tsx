import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AG007",
  description: "AG007 — Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
