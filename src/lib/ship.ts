// app/lib/ship.ts
let isSailing = false;
let subscriber: (() => void) | null = null;

export function setSail(): void {
  isSailing = true;
  if (subscriber) subscriber();
}

export function dock(): void {
  isSailing = false;
  if (subscriber) subscriber();
}

export function board(callback: () => void): () => void {
  subscriber = callback;
  return () => {
    subscriber = null;
  };
}

export function getVoyageStatus(): boolean {
  return isSailing;
}
