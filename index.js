const { fengshui } = require('./data');

function countCharacter(value) {
  const zero = [' '];
  const one = ['A', 'J', 'S'];
  const two = ['B', 'K', 'T'];
  const three = ['C', 'L', 'U'];
  const four = ['D', 'M', 'V'];
  const five = ['E', 'N', 'W'];
  const six = ['F', 'O', 'X'];
  const seven = ['G', 'P', 'Y'];
  const eight = ['H', 'Q', 'Z'];
  const nine = ['I', 'R'];
  const character = value.toUpperCase();

  if (isNaN(character)) {
    if (zero.includes(character)) {
      return 0;
    }
    if (one.includes(character)) {
      return 1;
    }
    if (two.includes(character)) {
      return 2;
    }
    if (three.includes(character)) {
      return 3;
    }
    if (four.includes(character)) {
      return 4;
    }
    if (five.includes(character)) {
      return 5;
    }
    if (six.includes(character)) {
      return 6;
    }
    if (seven.includes(character)) {
      return 7;
    }
    if (eight.includes(character)) {
      return 8;
    }
    if (nine.includes(character)) {
      return 9;
    }
    return 0;
  }
  const input = parseInt(character);

  if (Number.isNaN(input) === true) {
    return 0;
  }
  return parseInt(character);
}

function calculateFengshui(name) {
  const params = name;
  let counter = 0;
  const arrayLoop = params.split('');
  for (const arr of arrayLoop) {
    const numericalOutput = countCharacter(arr);
    counter = parseInt(counter) + parseInt(numericalOutput);
  }
  if (counter > 81) {
    counter -= 81;
  }
  const meaning = fengshui.filter((item) => item.NO === parseInt(counter));
  return meaning;
}

module.exports = (name)=>{
  return calculateFengshui(name);
}