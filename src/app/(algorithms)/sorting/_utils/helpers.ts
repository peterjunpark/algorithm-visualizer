import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { ArrayElement } from "./types";

export function visualizeCompare(...elems: ArrayElement[]) {
  elems.forEach((elem) => {
    elem.color = "COMPARED";
  });
}

export function visualizeUncompare(
  originalColor: "UNSORTED" | "SORTED",
  ...elems: ArrayElement[]
) {
  elems.forEach((elem) => {
    elem.color = originalColor;
  });
}

export function visualizeSorted(...elems: ArrayElement[]) {
  elems.forEach((elem) => {
    elem.color = "SORTED";
  });
}

export function getMagnitudeOptions(
  magnitudeParam: string | unknown,
  algorithmParam: string | null,
  router: AppRouterInstance,
) {
  let animationInterval = 100;
  let arrayLength = 14;

  switch (magnitudeParam) {
    case "low":
      animationInterval = 100;
      break;
    case "med":
      animationInterval = 20;
      arrayLength *= 3;
      break;
    case "high":
      arrayLength *= 9;
      break;
    default:
      router.replace(
        algorithmParam
          ? `?algorithm=${algorithmParam}&magnitude=med`
          : `?magnitude=med`,
      );
  }

  return { animationInterval, arrayLength };
}
