import "./globals.css";
import React from "react";
import Sailor from "@/components/Sailor";
import CrowsNest from "@/components/crows-nest";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Sailor fallback={<div>Immediate Client Skeleton...</div>}>
          <CrowsNest />
          {children}
        </Sailor>
      </body>
    </html>
  );
}
