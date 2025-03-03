import React from "react";

export default async function TestPage() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return <div>TestPage</div>;
}
