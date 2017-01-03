// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  },

  reversed: function(string){
    var reversed = new Array(string.length);
    var characters = string.split('');
    for (var i = 0; i < characters.length; i++) {
      reversed[i] = characters[characters.length - 1 - i];
    }
    return reversed.join('');
  },

  loudSnakeCase: function(string){
    var snakeCase = [];
    var characters = string.split('');
    var punctuation = ['.', '!'];
    for (var i = 0; i < characters.length; i++) {
      if (characters[i] === ' ') {
        if (snakeCase[i - 1] !== '_') {
          snakeCase[i] = '_';
        }
      } else if (!punctuation.includes(characters[i])) {
        if (snakeCase[i - 1] === '_') {
          snakeCase[i] = characters[i].toUpperCase();
        } else {
          snakeCase[i] = characters[i];
        }
      }
    }
    return snakeCase.join('');
  },

  compareArrays: function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for(var index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(number){
    var result = new Array(number);

    for(var current = 1; current <= number; current++) {
      if (current % 3 === 0 && current % 5 === 0){
        result[current - 1] = 'FIZZBUZZ';
      } else if (current % 3 === 0) {
        result[current - 1] = 'FIZZ';
      } else if (current % 5 === 0) {
        result[current - 1] = 'BUZZ';
      } else {
        result[current - 1] = current;
      }
    }

    return result;
  },

  myMap: function(array, funktion){
    var map = new Array(array.length);

    for(var index = 0; index < array.length; index++) {
      map[index] = funktion(array[index]);
    }

    return map;
  },

  primes: function(number){
    var primes = [];

    var isPrime = function(number) {
      var checkLimit = Math.sqrt(number);
      for(var denominator = 2; denominator <= checkLimit; denominator++) {
        if (number % denominator === 0) {
          return false;
        }
      }
      return true;
    };

    for(var current = 2; current < number; current++) {
      if (isPrime(current)) {
        primes.push(current);
      }
    }

    return primes;
  },
}
