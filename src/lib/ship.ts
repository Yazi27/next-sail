// app/lib/ship.ts
let isSailing = false;
let subscriber: ((sailing: boolean) => void) | null = null;

export function setSail(): void {
  isSailing = true;
  if (subscriber) subscriber(isSailing);
}

export function dock(): void {
  isSailing = false;
  console.log("Docking");
  if (subscriber) subscriber(isSailing);
}

export function board(callback: (sailing: boolean) => void): () => void {
  subscriber = callback;
  return () => {
    subscriber = null;
  };
}

export function getVoyageStatus(): boolean {
  return isSailing;
}
