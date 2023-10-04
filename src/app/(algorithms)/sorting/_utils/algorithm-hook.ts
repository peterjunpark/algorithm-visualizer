import { useState, useCallback, useRef } from "react";
import { rng } from "@/lib/utils";

export function useSortingAlgorithm() {
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]); // This state controls what is displayed on the page.
  const arrayRef = useRef<number[]>([]); // This is a reference to the array before it is sorted. Used to reset the array.

  const handleRandomize = useCallback((arrayLength: number) => {
    const newArray: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(rng(1, 100));
    }

    setArray(newArray);
    arrayRef.current = [...newArray];
  }, []);

  const handleReset = useCallback(() => {
    setArray([...arrayRef.current]);
  }, []);

  return {
    array,
    setArray,
    arrayRef,
    isSorting,
    setIsSorting,
    handleRandomize,
    handleReset,
  };
}
