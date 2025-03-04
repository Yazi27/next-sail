// app/layout.tsx
import "./globals.css";
import React from "react";

import CrowsNest from "@/components/crows-nest";
import Skeleton from "@/components/skeleton";
import Sailor from "@/components/sailor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <CrowsNest />
        <Sailor fallback={<Skeleton />}>{children}</Sailor>
      </body>
    </html>
  );
}
