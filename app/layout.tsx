import type { Metadata } from "next";
import "./globals.css";

const title = "PawWalk — Reliable dog walks, scheduled for your day";
const description = "Sign up for early access to PawWalk. Flexible scheduling, vetted walkers, live walk updates, and clear pricing. Get Early Access.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
