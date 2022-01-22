var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elDiceTree      = document.getElementById('dice3');
var elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var diceTree   = Math.floor((Math.random() * 6) + 1);
 
  console.log(diceOne + ' ' + diceTwo+ ' ' + diceTree);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 
  for (var t = 1; t <= 6; t++) {
    elDiceTree.classList.remove('show-' + t);
    if (diceTree === t) {
      elDiceTree.classList.add('show-' + t);
    }
  } 
  setTimeout(rollDice(), 1000);
}