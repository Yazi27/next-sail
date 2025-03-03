// app/lib/customRscFetch.ts
export async function customRscFetch(url: string): Promise<Response> {
  // Start the navigation
  // (Optionally, you might call setSail() here instead of on click.)
  const response = await fetch(url);
  // At this point, you could check the response, or simply consider it done.
  return response;
}
