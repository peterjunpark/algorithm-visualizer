import { delay } from "@/lib/utils";
import type { ArrayElement } from "../_utils/types";

export const selectionSort = async (
  array: ArrayElement[],
  setArray: React.Dispatch<React.SetStateAction<ArrayElement[]>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  animationInterval: number,
) => {
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
