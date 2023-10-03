import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function getSortingOptions(
  magnitudeParam: string | unknown,
  algorithmParam: string | null,
  router: AppRouterInstance,
) {
  let animationInterval = 500;
  let arrayLength = 16;

  switch (magnitudeParam) {
    case "0":
      break;
    case "1":
      animationInterval -= 100;
      arrayLength *= 3;
      break;
    case "2":
      animationInterval -= 200;
      arrayLength *= 9;
      break;
    case "3":
      animationInterval -= 300;
      arrayLength *= 27;
      break;
    default:
      router.replace(
        algorithmParam
          ? `?algorithm=${algorithmParam}&magnitude=2`
          : `?magnitude=2`,
      );
  }

  return { animationInterval, arrayLength };
}
