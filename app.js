'use strict';

// var visitorName = prompt('Hello! What is your name?');
// alert('Hello, ' + visitorName + '!' + ' Welcome to my website!')
// console.log(visitorName);

// var bethBirth = prompt('Did I grow up in the US?');
// bethBirth = bethBirth.toLowerCase();

// if (bethBirth === 'no' || bethBirth === 'n') {
//   alert('That is correct!');
//   console.log('That is correct!');
// } else {
//   alert('Not quite!');
//   console.log('Not quite!');
// }

// var bethUni = prompt('Did I go to University in the US?');
// bethUni = bethUni.toLowerCase();

// if (bethUni === 'yes' || bethUni === 'y') {
//   alert('That is correct!');
//   console.log('Correct!'); 
// } else {
//   alert('Not quite!')
//   console.log('Not quite!');
// }

// var bethPets = prompt('Do I have dogs?');
// bethPets = bethPets.toLowerCase();

// if(bethPets === 'no' || bethPets === 'n') {
//    alert('That is correct!')
//     console.log('That is correct!');
// } else {
// alert('Not quite!')
// console.log('Not quite!');
// }

// var bethWork = prompt('Have I worked as a nanny?');
// bethWork = bethWork.toLowerCase();

// if(bethWork === 'yes' || bethWork === 'y') {
//    alert('That is correct!')
//     console.log('That is correct!');
// } else {
// alert('Not quite!')
// console.log('Not quite!');
// }

// var bethCountry = prompt('Have I lived in more than one country?');
// bethCountry = bethCountry.toLowerCase();

// if(bethCountry === 'yes' || bethCountry === 'y') {
//    alert('That is correct!')
//     console.log('That is correct!');
// } else {
// alert('Not quite!')
// console.log('Not quite!');
// }

var bethTravel = prompt('How many countries do you think I have visited?')
bethTravel = parseInt(bethTravel);
var travelNumberGuesses = 3
//console.log(visitorName + ' guessed ' + bethTravel);
while (travelNumberGuesses > 0) {
  if (bethTravel === 20) {
    alert('That is correct!');
    //console.log('That is correct!');
    travelNumberGuesses = 0;
  } else if (bethTravel < 20) {
    alert('Too low! Guess again.');
    travelNumberGuesses --;
    //console.log('That is incorrect');
  } else if (bethTravel > 20) {
    alert('Too high! Try again!');
    travelNumberGuesses --;
    //console.log('That is incorrect');
  } else {
    travelNumberGuesses = prompt('You need to fill in a number. Try again!');
  }
}
alert('The correct answer is 20!');

var bethLive = prompt('Which of these countries have I not lived in?')


alert('Thanks for taking the time to get to know me, ' + visitorName + '!');
