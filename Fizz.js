function fizz(phonenumber) {
  let sum = 0;
  let output = '';
  for (let digit of phonenumber.toString()) {
    sum += parseInt(digit);
  }
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      output += 'FizzBuzz';
    } else if (i % 3 === 0) {
      output += 'Fizz';
    } else if (i % 4 === 0) {
      output += 'Buzz';
    } else {
      output += i + ' ';
    }
  }
  console.log(output.trim());
}
fizz(9000000007);