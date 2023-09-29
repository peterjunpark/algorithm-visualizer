import { bubbleSort } from "./bubble-sort";

describe("bubble sort", () => {
  test("sorts an array", () => {
    expect(bubbleSort([3, 2, 4, 1], 0)).toEqual([1, 2, 3, 4]);
  });
});
