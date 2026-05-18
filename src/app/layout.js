import React, { Suspense } from "react";
import "./globals.css";

export const metadata = {
  title: "Jethro Lopwus",
  description: "Jethro Lopwus — Software Engineer & Blockchain Researcher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Suspense fallback={<p>Loading...</p>}>
        <body className="antialiased">{children}</body>
      </Suspense>
    </html>
  );
}
