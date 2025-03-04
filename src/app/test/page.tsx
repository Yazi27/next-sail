import React, { Suspense } from "react";

async function BlockedContent() {
  // Simulate a blocking delay (e.g., data fetching)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Delayed Content Loaded</div>;
}

export default async function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <p>Test page content</p>
      <Suspense fallback={<div>Loading delayed content...</div>}>
        <BlockedContent />
      </Suspense>
    </div>
  );
}
