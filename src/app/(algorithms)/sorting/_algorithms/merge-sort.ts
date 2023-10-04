import { delay } from "@/lib/utils";
import {
  visualizeCompare,
  visualizeUncompare,
  visualizeSorted,
  createWorkingCopy,
} from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const mergeSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  const arr = createWorkingCopy(array);

  setStatus(true);

  for (let i = 0; i < arr.length; i++) {
    let currSmallest = i;

    visualizeCompare(arr[i]);
    await delay(animationInterval);
    setArray(...[arr]);
    visualizeUncompare("UNSORTED", arr[i]);

    // for (let j = i + 1; i < arr.length; j++) {
    //   currSmallest++;
    //   // if (arr[j].value < arr[currSmallest].value) {
    //   //   currSmallest = j;
    //   // }
    //   visualizeCompare(arr[currSmallest]);
    //   await delay(animationInterval);
    //   visualizeUncompare("UNSORTED", arr[currSmallest]);
    // }
  }
  setStatus(false);
};
