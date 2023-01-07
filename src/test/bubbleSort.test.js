const {expect} = require("chai");
const {bubbeSort} = require("../main/bubbleSort");

describe("bubbleSort", () => {
    describe("Give an array", () => {
        it("should return the sum of the sorted array", () => {
            expect(bubbeSort([1,2,3,6,4,90,11,33,5])).to.be.equal([1,2,3,4,5,6,11,33,90]);
        })
    })
})