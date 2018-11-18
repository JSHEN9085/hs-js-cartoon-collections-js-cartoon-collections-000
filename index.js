function dwarfRollCall(dwarves) {
var string = '';
  for (var i = 0; i < dwarves.length; i++){
    var num = i + 1; 
    var name = '. ' + dwarves[i] + ' ';
    string += num + name;
  }  
  return string; 
}

// function dwarfRollCall(dwarves) {
// var string = '';
//   for (var i = 0; i < dwarves.length; i++){
//   if (i === 0){
//     string += '1. ' + dwarves[i];
//   } else {
//     var num = i + 1;
//     var unit = '. ' + dwarves[i];
//     string += ' ' + num + unit;
//   }
//  }
//   return string; 
// }

function summonCaptainPlanet(planeteerCalls){
  var arr = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    var element = planeteerCalls[i].toUpperCase() + '!';
    arr.push(element);
  }
  return arr;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (word.length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (var i = 0; i < foods.length; i++){
    if (cheese.indexOf(foods[i]) > -1){
      return foods[i];
    } 
  }
  return "no cheese!"
}




