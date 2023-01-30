var calculator = require("../app/calculator.js");

var assert = require("assert");

describe("Calculator", function () {
  describe("add()", function () {
    it("should return 7 when 5 and 2 are passed", function () {
      assert.equal(7, calculator.add(5, 2));
    });
  });

  describe("add()", function () {
    it("should return 8 when 5 and 2 are passed", function () {
      assert.equal(8, calculator.add(5, 2));
    });
  });

  describe("sub()", function () {
    it("should return 3 when 5 and 2 are passed", function () {
      assert.equal(3, calculator.sub(5, 2));
    });
  });

  describe("sub()", function () {
    it("should return 4 when 5 and 2 are passed", function () {
      assert.equal(4, calculator.sub(5, 2));
    });
  });

  describe("mul()", function () {
    it("should return 10 when 5 and 2 are passed", function () {
      assert.equal(10, calculator.mul(5, 2));
    });
  });

  describe("mul()", function () {
    it("should return 11 when 5 and 2 are passed", function () {
      assert.equal(11, calculator.mul(5, 2));
    });
  });

  describe("div()", function () {
    it("should return 5 when 10 and 2 are passed", function () {
      assert.equal(5, calculator.div(10, 2));
    });
  });

  describe("div()", function () {
    it("should return 6 when 10 and 2 are passed", function () {
      assert.equal(6, calculator.div(10, 2));
    });
  });
});



