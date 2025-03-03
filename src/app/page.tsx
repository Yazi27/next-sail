"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <div>Home Page</div>
      <Link prefetch={false} href="/test">
        Test
      </Link>
    </div>
  );
}
