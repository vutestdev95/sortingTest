const { expect } = require("chai");
const { bubbleSort } = require("../main/bubbleSort");

describe("bubbleSort", () => {
  describe("Give an array", () => {
    it("should return the sum of the sorted array", () => {
      expect(bubbleSort([1, 2, 3, 6, 4, 90, 11, 33, 5])).to.be.deep.equal([
        1, 2, 3, 4, 5, 6, 11, 33, 90,
      ]);
      expect(bubbleSort([1, 2, 3, 6, 4, 90, 11, 33, 5])).to.be.deep.equal([
        1, 2, 3, 4, 5, 6, 11, 33, 90,
      ]);
    });
  });
});
