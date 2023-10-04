import { delay } from "@/lib/utils";
import type { ArrayElement } from "../_utils/types";

export const insertionSort = async (
  array: ArrayElement[],
  setArray: React.Dispatch<React.SetStateAction<ArrayElement[]>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  animationInterval: number,
) => {
  setStatus(true);
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i].value;
    let j = i - 1;

    while (j >= 0 && arr[j].value > curr) {
      arr[j + 1] = arr[j];
      // animation
      await delay(animationInterval);
      arr[j].color = "COMPARED"; // Update color here
      setArray([...arr]);
      j--;
    }
    arr[j + 1].value = curr;
  }
  setStatus(false);
};
