import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
 weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Nafisha Dental",
  description: "Solusi kesehatan gigi Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-teal-100/50`}
      >
        {children}
      </body>
    </html>
  );
}
