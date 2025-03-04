// app/components/Captain.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { setSail } from "@/lib/ship";

interface CaptainProps {
  href: string;
  children: ReactNode;
}

export default function Captain({ href, children }: CaptainProps) {
  const handleClick = async () => {
    setSail();
  };

  return (
    <Link href={href} onClick={handleClick} prefetch={false}>
      {children}
    </Link>
  );
}
