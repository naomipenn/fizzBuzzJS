describe("Fizzbuzz", function() {

  it("knows if a number is divisible by 3", function() {
    expect(isDivisibleByThree(3)).toEqual (true);
  });

  it("knows if a number is not divisible by 3", function() {
    expect(isDivisibleByThree(4)).toEqual (false);
  });

  it("knows if a number is divisible by 5", function() {
    expect(isDivisiblebyFive(5)).toEqual (true);
  });

  it("knows if a number is not divisible by 5", function() {
    expect(isDivisiblebyFive(6)).toEqual (false);
  });

  it("knows if a number is divisible by both 3 and 5", function() {
    expect(isDivisibleByThreeAndFive(15)).toEqual (true);
  });

  it("knows if a number is not divisible by 3 or 5", function() {
    expect(isDivisibleByThreeAndFive(16)).toEqual (false);
  });

  it("knows if a number is divisible by another number", function() {
    expect(isDivisibleBy(3, 3)).toEqual (true);
  });

  it("knows if a number is not divisible by another number", function() {
    expect(isDivisibleBy(4, 3)).toEqual (false);
  });

  it("returns 'Fizz' when passed a number that is divisible by 3", function() {
    expect(fizzbuzz(3)).toEqual ('Fizz');
  });
  //
  it("returns 'Buzz' when passed a number that is divisible by 5", function() {
    expect(fizzbuzz(5)).toEqual ('Buzz');
  });

  it("returns 'FizzBuzz' when passed a number that is divisible by 3 and 5", function() {
    expect(fizzbuzz(15)).toEqual ('FizzBuzz');
  });

  it("returns the same number when passed a number that is not divisible by 3, 5 or 15", function() {
    expect(fizzbuzz(7)).toEqual (7);
  });


});
