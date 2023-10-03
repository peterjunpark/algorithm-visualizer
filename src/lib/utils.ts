export function rng(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function delay(timeoutInterval: number) {
  await new Promise((resolve) => setTimeout(resolve, timeoutInterval)); // Wait for 500ms
}
