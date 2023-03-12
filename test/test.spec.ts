import { yourLibFunction } from "../src/main";

describe("Unit tests", () => {
  it("should add 2 and 5", async () => {
    expect(yourLibFunction(2, 5)).toEqual(7);
  });
});
