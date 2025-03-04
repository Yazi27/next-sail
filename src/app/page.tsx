// app/page.tsx (example)
"use client";
import Captain from "@/components/captain";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Home Page</h1>
      <Captain href="/test">Client Fallback</Captain>
    </div>
  );
}
