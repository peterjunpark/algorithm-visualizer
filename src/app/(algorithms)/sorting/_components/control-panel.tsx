import React, { memo } from "react";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import type { Algorithm, Magnitude, Status } from "../_utils/types";
import {
  LuPlay,
  LuUndo2,
  LuRotateCcw,
  LuSignal,
  LuSignalHigh,
  LuSignalMedium,
} from "react-icons/lu";

type ControlPanelProps = {
  status: Status;
  magnitudeParam: Magnitude;
  algorithmParam: Algorithm | null;
  handleAnimate: () => void;
  handleRandomize: () => void;
  handleReset: () => void;
};

export default memo(function ControlPanel({
  status,
  algorithmParam,
  magnitudeParam,
  handleAnimate,
  handleRandomize,
  handleReset,
}: ControlPanelProps) {
  const router = useRouter();

  const algorithmOptions: Algorithm[] = [
    "BUBBLE",
    "INSERTION",
    "SELECTION",
    "MERGE",
    "QUICK",
    "RADIX",
  ];
  const magnitudeOptions: { param: Magnitude; icon: React.JSX.Element }[] = [
    { param: "low", icon: <LuSignalMedium key="low" /> },
    { param: "med", icon: <LuSignalHigh key="med" /> },
    { param: "high", icon: <LuSignal key="high" /> },
  ];

  const handleSelectAlgorithm = (algorithm: Algorithm) => {
    router.push(`?algorithm=${algorithm}&magnitude=${magnitudeParam}`);
  };
  const handleSelectMagnitude = (magnitude: Magnitude) => {
    router.push(
      algorithmParam
        ? `?algorithm=${algorithmParam}&magnitude=${magnitude}`
        : `?magnitude=${magnitude}`,
    );
  };

  return (
    <div className="menu rounded-box absolute left-1/2 z-50 my-3 flex w-max -translate-x-1/2 transform items-center justify-around bg-base-200 bg-opacity-80 px-3 md:left-2 md:m-3 md:transform-none">
      <div className="flex items-center">
        <select
          aria-label="Select an algorithm"
          onChange={(e) => handleSelectAlgorithm(e.target.value as Algorithm)}
          className="select select-sm m-2 w-fit"
          defaultValue={algorithmParam ? algorithmParam : "default"}
          disabled={status.sorting}
        >
          <option value="default" disabled>
            Select an algorithm
          </option>
          {algorithmOptions.map((option, index) => (
            <option value={option} key={index}>
              {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}{" "}
              sort
            </option>
          ))}
        </select>
        <li
          className={clsx(
            (algorithmParam === null || status.sorting || status.sorted) &&
              "disabled",
          )}
        >
          <button
            onClick={handleAnimate}
            className={clsx(
              (algorithmParam === null || status.sorted) &&
                "cursor-not-allowed",
            )}
            disabled={
              algorithmParam === null || status.sorting || status.sorted
            }
          >
            <LuPlay />
            Sort
          </button>
        </li>
      </div>
      <ul className="flex w-full justify-between">
        <li className={clsx(status.sorting && "disabled")}>
          <button onClick={handleReset} disabled={status.sorting}>
            <LuUndo2 />
            Reset array
          </button>
        </li>
        <li className={clsx(status.sorting && "disabled")}>
          <button
            onClick={() => {
              handleRandomize();
            }}
            disabled={status.sorting}
          >
            <LuRotateCcw />
            Randomize array
          </button>
        </li>
      </ul>
      <div className="mb-2 mt-1 flex items-center gap-3">
        <div className="join mt-1">
          {magnitudeOptions.map((option, index) => (
            <button
              aria-label={`Set array to length and speed level ${option.param}`}
              onClick={() => handleSelectMagnitude(option.param as Magnitude)}
              className={clsx(
                "btn btn-outline join-item btn-sm w-20 text-xl",
                magnitudeParam === option.param && "btn-active",
              )}
              disabled={status.sorting}
              key={index}
            >
              {option.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
