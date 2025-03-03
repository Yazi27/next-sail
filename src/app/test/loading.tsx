"use client";
import { useEffect } from "react";
import { dock } from "@/lib/ship";

export default function Loading() {
  useEffect(() => {
    console.log("ArrivalNotifier mounted");
    dock();
  }, []);
  return <p>Loading</p>;
}
