// app/layout.tsx
import Sailor from "../components/Sailor";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Sailor fallback={<div>Immediate Client Skeleton...</div>}>
          {children}
        </Sailor>
      </body>
    </html>
  );
}
