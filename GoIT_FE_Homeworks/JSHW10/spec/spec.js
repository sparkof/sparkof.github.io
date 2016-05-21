var pow = require('../build/js/pow.js');

describe("Pow function", function() {
  it("a ^ +n", function() {
    // prepare
    var result;

    //act
    result = pow(2,2);

    //accept
    expect(result).toBe(4);
  });

  it("a ^ -n", function() {
    // prepare
    var result;

    //act
    result = pow(2,-2);

    //accept
    expect(result).toBe(1/4);
  });

  it("a = 0", function() {
    // prepare
    var result;

    //act
    result = pow(0,-999);

    //accept
    expect(result).toBe(0);
  });

});
