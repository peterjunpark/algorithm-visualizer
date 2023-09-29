import type { SortingAnimation } from "../_utils/types";

export function bubbleSort<T>(array: T[]) {
  const animations: SortingAnimation[] = [];

  for (let i = array.length - 1; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      animations.push({ operation: "COMPARE", indices: [j, j + 1] });
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
        animations.push({ operation: "SWAP", indices: [j, j + 1] });
      }
    }
    if (noSwaps) break;
  }
  return animations;
}

console.log(bubbleSort([1, 4, 3, 6, 2]));
