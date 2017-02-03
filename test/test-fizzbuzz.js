const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return fizz-buzz for multiples of 15', function() {
    const multiplesOfFifteen = [15, 30, 45];
    multiplesOfFifteen.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return fizz for multiples of 3', function() {
    const multiplesOfThree = [3, 6, 9, 12]
    multiplesOfThree.forEach(function(input) {
        const answer = fizzBuzzer(input);
      	answer.should.equal('fizz');
    });
  });

  it('should return a number if not multiple of 3, 5, or 15', function() {
    const numbers = [4, 7, 11]
    numbers.forEach(function(input) {
        const answer = fizzBuzzer(input);
      	answer.should.equal(answer);
    });
  });
  //Error
  it('should throw error if input != number', function() {
    const notNumbers = ["string", true, "2"]
    notNumbers.forEach(function(input) {
        (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});