import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "FineDine - منصة إدارة المطاعم بالذكاء الاصطناعي",
  description: "أبهر عملاءك وحقق إيرادات أكثر مع قوائم QR المدعومة بالذكاء الاصطناعي، مواقع المطاعم، والمشاركات الاجتماعية الآلية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${arabic.variable}`}>
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
