import { delay } from "@/app/lib/utils";
import { SortingPageState } from "../_utils/sorting-state";

export async function bubbleSort(workingArray: SortingPageState.workingArray) {
  arrayStatus.isSorting = true;

  while (arrayStatus.isSorting) {
    for (let i = workingArray.length - 1; i > 0; i--) {
      let noSwaps = true;
      for (let j = 0; j < i; j++) {
        if (workingArray[j] > workingArray[j + 1]) {
          await delay(() => {
            [workingArray[j], workingArray[j + 1]] = [
              workingArray[j + 1],
              workingArray[j],
            ];
          }, interval);
          noSwaps = false;
        }
      }
      if (noSwaps) break;
      arrayStatus.isSorting = false;
      arrayStatus.sortOrder = "LOW_HIGH";
    }
  }
}
