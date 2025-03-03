// app/page.tsx (example)
"use client";
import React from "react";
import Captain from "../components/Captain";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Captain href="/test">Go to Test</Captain>
    </div>
  );
}
