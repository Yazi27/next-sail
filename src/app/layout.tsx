import "./globals.css";
import React from "react";
import Sailor from "@/components/Sailor";
import NavigationWatcher from "@/components/navigation-watcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Sailor fallback={<div>Immediate Client Skeleton...</div>}>
          {/* The one-time watcher that calls `dock()` whenever the path changes */}
          <NavigationWatcher />
          {children}
        </Sailor>
      </body>
    </html>
  );
}
