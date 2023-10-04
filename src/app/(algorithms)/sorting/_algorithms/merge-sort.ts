import { delay } from "@/lib/utils";
import {
  visualizeCompare,
  visualizeUncompare,
  visualizeSorted,
} from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const mergeSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus({ sorting: true, sorted: false });

  for (let i = 0; i < array.length; i++) {
    let currSmallest = i;

    visualizeCompare(array[i]);
    await delay(animationInterval);
    setArray(...[array]);
    visualizeUncompare("UNSORTED", array[i]);

    // for (let j = i + 1; i < array.length; j++) {
    //   currSmallest++;
    //   // if (array[j].value < array[currSmallest].value) {
    //   //   currSmallest = j;
    //   // }
    //   visualizeCompare(array[currSmallest]);
    //   await delay(animationInterval);
    //   visualizeUncompare("UNSORTED", array[currSmallest]);
    // }
  }
  setStatus({ sorting: false, sorted: true });
};
