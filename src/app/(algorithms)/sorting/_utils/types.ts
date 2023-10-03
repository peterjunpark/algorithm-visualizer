export type SortingAnimation = {
  operation: "COMPARE" | "SWAP";
  indices: number[];
};

export type Algorithm =
  | "BUBBLE"
  | "INSERTION"
  | "SELECTION"
  | "MERGE"
  | "QUICK"
  | "RADIX";

export type Magnitude = "low" | "med" | "high";
