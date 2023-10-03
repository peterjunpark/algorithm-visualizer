import { useState, useCallback, useRef } from "react";
import { rng } from "@/lib/utils";

export function useSortingVisualizer() {
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]);
  const arrayRef = useRef<number[]>([]);

  const handleRandomize = useCallback((arrayLength: number) => {
    const newArray: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(rng(1, 100));
    }

    setArray(newArray);
    arrayRef.current = [...newArray];
  }, []);

  return { handleRandomize };
}
