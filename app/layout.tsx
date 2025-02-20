import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upliance Assignment",
  description: "Associate Frontend Developer Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}