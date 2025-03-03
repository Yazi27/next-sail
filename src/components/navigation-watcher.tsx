"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { dock } from "@/lib/ship";

/**
 * A simple client component that calls `dock()` whenever
 * the URL (pathname) changes, indicating the new route has loaded.
 */
export default function NavigationWatcher() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;

      // Second layer of security
      dock();
    }
  }, [pathname]);

  return null;
}
