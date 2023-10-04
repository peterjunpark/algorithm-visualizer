import { delay } from "@/lib/utils";

export const selectionSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  animationInterval: number,
) => {
  setStatus(true);
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let idxOfSmallest = i;
    await delay(animationInterval);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxOfSmallest]) {
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
