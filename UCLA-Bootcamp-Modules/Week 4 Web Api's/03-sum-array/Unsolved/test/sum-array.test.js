var expect = chai.expect;

describe("addArray", function () {
  it("returns the total of all of the number in a given `array`", function () {

    var array = [1, 1, 1, 1];

    var result = arrayAdder(array);

    expect(result).to.eql(4);

  });
});
