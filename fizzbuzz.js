/**
 * Simple Fizzbuzz program in Javacript
 * @param {*} num 
 */

function fizzBuzz(num) {
  for(var i = 0; i <= num; i++) {
    if(i % 15 === 0) {
      console.log("FizzBuzz")
    }
    if(i % 3 === 0) {
      console.log("Fizz");
    }
    if(i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz(20);