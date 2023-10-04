import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function getMagnitudeOptions(
  magnitudeParam: string | unknown,
  algorithmParam: string | null,
  router: AppRouterInstance,
) {
  let animationInterval = 0;
  let arrayLength = 12;

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
