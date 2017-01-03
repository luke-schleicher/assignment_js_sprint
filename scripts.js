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
      // if first letter, capitalize
      // if punctuation, remove
      // if space, remove and replace with underscore
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

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}