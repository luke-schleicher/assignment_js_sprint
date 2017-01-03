
function Roulette(startingBankroll) {

  this.bankroll = startingBankroll;

}

var rPrototype = Roulette.prototype;

rPrototype.myBankroll = function() {
  return "You have $" + this.bankroll;
};

/*
"Even" (2:1)
"Odd" (2:1)
"1 to 18" (2:1)
"19 to 36" (2:1)
"1st 12" (3:1)
"2nd 12" (3:1)
"3rd 12" (3:1)
*/

rPrototype.spin = function(bet, betType) {

  if (this.bankroll - bet < 0){
    console.log("You don't have enough dough to spin.");
    console.log("Buy in, and then we can talk.");
    return false;
  }

  this.bankroll -= bet;
  var actualNumber = Math.floor(Math.random() * 37);

  if (typeof betType === 'string') {

    this[betType].call(this, bet, actualNumber);

  } else if (typeof betType === 'number') {

    this.numberedPayout(bet, actualNumber, betType);

  }

};

rPrototype.even = function(bet, actualNumber) {
  if(actualNumber % 2 === 0) {
    var winnings = bet * 2;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype.odd = function(bet, actualNumber) {
  if(actualNumber % 2 !== 0) {
    var winnings = bet * 2;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype['1 to 18'] = function(bet, actualNumber) {
  if(actualNumber > 0 && actualNumber <= 18) {
    var winnings = bet * 2;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype['19 to 36'] = function(bet, actualNumber) {
  if(actualNumber > 18 && actualNumber <= 36) {
    var winnings = bet * 2;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype['1st 12'] = function(bet, actualNumber) {
  if(actualNumber > 0 && actualNumber <= 12) {
    var winnings = bet * 3;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype['2nd 12'] = function(bet, actualNumber) {
  if(actualNumber > 12 && actualNumber <= 24) {
    var winnings = bet * 3;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype['3rd 12'] = function(bet, actualNumber) {
  if(actualNumber > 24 && actualNumber <= 36) {
    var winnings = bet * 3;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }
};

rPrototype.numberedPayout = function(bet, actualNumber, betNumber) {

  if (betNumber === actualNumber) {
    var winnings = bet * 35;
    this.bankroll += winnings;
    this.win(winnings, actualNumber);
  } else {
    this.lose(actualNumber);
  }

};

rPrototype.win = function(winnings, actualNumber) {
  console.log("You win $" + winnings + ", the spin was " + actualNumber);
  console.log("You have $" + this.bankroll);
};

rPrototype.lose = function(actualNumber) {
  console.log("You Lose, the spin was " + actualNumber);
};

rPrototype.buyIn = function(amount) {
  this.bankroll += amount;
  console.log("You bought in $" + amount + ". You have $" + this.bankroll);
};

var r = new Roulette(100);

