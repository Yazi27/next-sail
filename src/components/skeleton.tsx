import React from "react";

export default function Skeleton() {
  return (
    <section className="flex flex-col space-y-2 h-full items-center justify-center">
      <div className="h-4 w-16 bg-zinc-300 rounded-md animate-pulse" />
      <div className="h-4 w-32 bg-zinc-300 rounded-md animate-pulse" />
      <div className="h-4 w-24 bg-zinc-300 rounded-md animate-pulse" />
    </section>
  );
}
