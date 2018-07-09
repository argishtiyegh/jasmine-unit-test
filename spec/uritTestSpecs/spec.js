import {testFunction} from "../../helpers/helperFunctions"
import {testFunctionTwo} from "../../helpers/helperFunctions"

describe("testFunction which", function () {
    it("should return Test With Jasmine", function () {
        expect(testFunction()).toEqual("Test With Jasmine");
    })
});


describe("testFunction which", function () {
    it("should return Test With Jasmine 2", function () {
        expect(testFunctionTwo()).toEqual("Test With Jasmine 2");
    })
});