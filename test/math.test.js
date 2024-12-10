const { add, subtract, multiply } = require("../src/math.js");

describe("Math Functions", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 1)).toBe(-1);
    expect(subtract(-1, -1)).toBe(0);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 3)).toBe(-3);
    expect(multiply(0, 5)).toBe(0);
  });
});
