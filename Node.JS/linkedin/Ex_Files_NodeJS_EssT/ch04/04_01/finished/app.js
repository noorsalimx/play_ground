function makeInputVerifier(minimum, maximum) {
  return function verify(inputValue) {
    if (inputValue < minimum) {
      return "Input is less than minimum value";
    } else if (inputValue >= minimum && inputValue <= maximum) {
      return "Input is in range";
    } else if (inputValue > maximum) {
      return "Input is more than maximum value";
    }
  };
}

const verify = makeInputVerifier(3, 10);
const result = verify(12);
console.log(result);
