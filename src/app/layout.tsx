import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "Imagify",
  description: "AI powered Image generetor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624ca5'}}}>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}  suppressHydrationWarning={true}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
