"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSortingOptions } from "./_utils";
import type { Algorithm, Splen } from "./_utils/types";
import ArrayElement from "./_components/array-element";
import ControlPanel from "./_components/control-panel";
import { rng } from "@/lib/utils";
import { bubbleSort } from "./_algorithms/bubble-sort";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const splenParam = searchParams.get("splen");
  const { animationInterval, arrayLength } = getSortingOptions(
    splenParam,
    sortParam,
    router,
  );

  const [array, setArray] = useState<number[]>([]);
  const arrayRef = useRef<number[]>([]);

  const unsortArray = useCallback(() => {
    setArray(arrayRef.current);
  }, []);

  const randomizeArray = useCallback(
    (arrayLength: number) => {
      const newArray: number[] = [];
      for (let i = 0; i < arrayLength; i++) {
        newArray.push(rng(1, 100));
      }

      arrayRef.current = newArray;
      unsortArray();
    },
    [unsortArray],
  );

  const animateArray = () => {
    console.log({ ref: arrayRef.current, array });
  };

  useEffect(() => {
    randomizeArray(arrayLength);
  }, [arrayLength, randomizeArray]);

  return (
    <main className="h-full pt-14">
      <ControlPanel
        sortParam={sortParam ? (sortParam as Algorithm) : null}
        splenParam={splenParam as Splen}
        arrayLength={arrayLength}
        handleAnimate={animateArray}
        handleRandomize={randomizeArray}
        handleUnsort={unsortArray}
      />
      <div className="mx-2 flex h-full items-end">
        {array.map((value, index) => (
          <ArrayElement key={index} {...{ index, value }} />
        ))}
      </div>
    </main>
  );
}
