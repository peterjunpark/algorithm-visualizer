import { delay } from "@/lib/utils";

export const insertionSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  animationInterval: number,
) => {
  setStatus(true);
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      await delay(animationInterval);
      setArray([...arr]);
      j--;
    }
    arr[j + 1] = curr;
  }
  setStatus(false);
};
