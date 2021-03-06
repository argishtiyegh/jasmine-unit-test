import {testFunction} from "../../helpers/helperFunctions"
import {testFunctionTwo} from "../../helpers/helperFunctions"
import {testObject} from "../../helpers/helperFunctions"


const testPerson = function () {
    this.name = "Argishti";
    this.getName = function () {
        return "My name is" + this.name
    }
};

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

describe("testFunction which", function () {
    it("all fields should be defined", function () {
        //testObject should have name property
        expect(testObject.name).toBeDefined();
    })
});


describe("A Spec", function () {
    beforeEach(function () {
       this.beforeEachCase = "started"
    });
    it("passing with this keyword", function () {
        this.insideSpec = "Spec";
        expect(this.beforeEachCase).toEqual("started");
    });
    it("next spec", function () {
        expect(this.insideSpec).toBe(undefined);
        let person = new testPerson();
        /*
        * В Jasmine отслеживания вызова функции и параметров вызова осуществляется с помощью spyOn.
        * Функции spyOn передается два параметра — объект, для которого осуществляется вызов функции, и имя функции,
        * которую необходимо отслеживать:
        * */
        spyOn(person, 'getName'); //
        person.getName();
        //without spyOn we cannot call toHaveBeenCalled();
        expect(person.getName).toHaveBeenCalled();
    })
});

// Available other functions

// expect(exampleoftrueFalse(5)).toBeTruthy();  toBeFalsy(),
// toContain() matchers provide us the facility to check whether any element is a part of the same array or some other sequential objects
// expect(currentVal).toBeDefined();
// expect(undefineValue).toBeUndefined();
// toBeNull();
// toBeGreaterThan(5);
// expect(exp).toBeLessThan(5);
// .toBeNaN();


//AFTER EACH EXAMPLE
//
// let currentVal = 0;
//
// afterEach(function(){
//     currentVal = 5;
// });
//
// describe("Different Methods of Expect Block",function() {
//
//     it("first call ", function(){
//         expect(currentVal).toEqual(0);
//     });
//
//     it("second call ",  function() {
//         expect(currentVal).toEqual(5);
//     });
//
// });