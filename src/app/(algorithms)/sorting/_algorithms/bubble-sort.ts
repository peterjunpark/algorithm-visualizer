import { delay } from "@/lib/utils";

export const bubbleSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setStatus: React.Dispatch<React.SetStateAction<boolean>>,
  animationInterval: number,
) => {
  setStatus(true);
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
        await delay(animationInterval);
        setArray([...arr]);
      }
    }
    if (!didSwap) break;
  }
  setStatus(false);
};
