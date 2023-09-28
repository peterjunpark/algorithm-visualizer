"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "./_utils/sorting-state";
import { ARRAY_LENGTH, ANIMATION_INTERVAL } from "./_utils/defaults";
import ArrayElement from "./_components/array-element";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { state, setState, generateArray, unsort } = useSortingState();

  const arrayLengthParam = searchParams.get("arrayLength");
  const intervalParam = searchParams.get("interval");
  const arrayLength = arrayLengthParam
    ? parseInt(arrayLengthParam, 10)
    : ARRAY_LENGTH;
  const interval = intervalParam
    ? parseInt(intervalParam, 10)
    : ANIMATION_INTERVAL;

  useEffect(() => {
    generateArray(arrayLength);
  }, [arrayLength, generateArray]);

  return (
    <div className="h-screen">
      <div className="mx-2 flex h-3/4 items-end border border-primary-content">
        {state.workingArray.map((value, index) => (
          <ArrayElement key={index} value={value} index={index}>
            {value}
          </ArrayElement>
        ))}
      </div>
    </div>
  );
}
