import { delay } from "@/lib/utils";
import type { AlgorithmProps } from "../_utils/types";

export const selectionSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus(true);
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let idxOfSmallest = i;
    await delay(animationInterval);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].value < arr[idxOfSmallest].value) {
        idxOfSmallest = j;
        await delay(animationInterval);
      }
    }

    if (i !== idxOfSmallest) {
      [arr[idxOfSmallest], arr[i]] = [arr[i], arr[idxOfSmallest]];
      await delay(animationInterval);
      setArray([...arr]);
    }
  }
  setStatus(false);
};
