import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My-portfolio",
  description: "My personal portfolio website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Suspense fallback={<p>Loading...</p>}>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
