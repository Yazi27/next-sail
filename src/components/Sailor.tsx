// app/components/Sailor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { board, getVoyageStatus } from "@/lib/ship";

interface SailorProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

function StableRenderer({
  isSailing,
  fallback,
  children,
}: {
  isSailing: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {isSailing ? (
        <React.Fragment key="fallback">{fallback}</React.Fragment>
      ) : (
        <React.Fragment key="children">{children}</React.Fragment>
      )}
    </>
  );
}

export default function Sailor({ fallback, children }: SailorProps) {
  const [isSailing, setIsSailing] = useState(getVoyageStatus());

  useEffect(() => {
    const unsubscribe = board((sailing: boolean) => {
      setIsSailing(sailing);
    });
    return () => unsubscribe();
  }, []);

  return (
    <StableRenderer isSailing={isSailing} fallback={fallback}>
      {children}
    </StableRenderer>
  );
}
