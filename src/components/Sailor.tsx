// app/components/Sailor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { board, getVoyageStatus } from "../lib/ship";

interface SailorProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export default function Sailor({ fallback, children }: SailorProps) {
  const [isSailing, setIsSailing] = useState(getVoyageStatus());

  useEffect(() => {
    // Subscribe to the ship's status changes
    const unsubscribe = board(() => {
      setIsSailing(getVoyageStatus());
    });
    return () => unsubscribe();
  }, []);

  if (isSailing) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
