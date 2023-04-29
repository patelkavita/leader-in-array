const {deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");
const {findLeaderInArray} = require('../src/leader-In-Array.js');

describe("Leader in Array", function(){
  it("should give last element if array is in assending order ", function() {
    deepStrictEqual([9], findLeaderInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  })
});

describe("Leader in Array", function(){
  it("should give all the element if array is in decending order ", function() {
    deepStrictEqual([9, 8, 7 ,6 ,5 ,4, 3, 2, 1], findLeaderInArray([9, 8, 7, 6, 5, 4, 3, 2, 1]));
  })
});


describe("Leader in Array", function(){
  it("should give only those element to whom next all element are lesser than it. ", function() {
    deepStrictEqual([22, 11, 8, 6], findLeaderInArray([5, 17, 22, 11, 8, 2, 6]));
  })
});


