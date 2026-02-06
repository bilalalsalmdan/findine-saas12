import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FineDine - Restaurant Management SaaS",
  description: "Modern restaurant management platform with digital menus, ordering, and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
