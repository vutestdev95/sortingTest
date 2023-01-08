const { expect } = require("chai");
const { sum } = require("../main/sum");

describe("sum", () => {
  describe("given two number", () => {
    it("should return the sum of the two numbers", () => {
      expect(sum(1, 2)).to.be.equal(3);
      expect(sum(1, 3)).to.be.equal(4);
    });
  });
});
