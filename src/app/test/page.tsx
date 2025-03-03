import React from "react";

export default async function TestPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>TestPage</div>;
}
