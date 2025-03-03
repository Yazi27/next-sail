// app/components/Sailor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { board, getVoyageStatus } from "@/lib/ship";

interface SailorProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export default function Sailor({ fallback, children }: SailorProps) {
  const [isSailing, setIsSailing] = useState(getVoyageStatus());

  console.log("rendering");

  useEffect(() => {
    const unsubscribe = board((sailing: boolean) => {
      console.log("Calling callback", sailing);
      setIsSailing(sailing);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div style={{ display: isSailing ? "none" : "block" }}>{children}</div>
      {isSailing && fallback}
    </>
  );
}
