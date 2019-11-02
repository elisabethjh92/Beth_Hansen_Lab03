'use strict';

var visitorName = prompt('Hello! What is your name?');
alert('Hello, ' + visitorName + '!' + ' Welcome to my website!')
console.log(visitorName);

var bethBirth = prompt('Did I grow up in the US?');
bethBirth = bethBirth.toLowerCase();

if (bethBirth === 'no' || bethBirth === 'n') {
  alert('That is correct!');
  console.log('That is correct!');
} else {
  alert('Not quite!');
  console.log('Not quite!');
}

var bethUni = prompt('Did I go to University in the US?');
bethUni = bethUni.toLocaleLowerCase();

if (bethUni === 'yes' || bethUni === 'y') {
  alert('That is correct!');
  console.log('Correct!'); 
} else {
  alert('Not quite!')
  console.log('Not quite!');
}

var bethPets = prompt('Do I have dogs?');
bethPets = bethPets.toLocaleLowerCase();

if(bethPets === 'no' || bethPets === 'n') {
   alert('That is correct!')
    console.log('That is correct!');
} else {
alert('Not quite!')
console.log('Not quite!');
}

// var bethWork = prompt('Have I worked as a nanny?');
// bethWork = bethWork.toLocaleLowerCase();

// if(bethWork === 'yes' || bethWork === 'y') {
//    alert('That is correct!')
//     console.log('That is correct!); correct answer to 'Have I worked as a nanny'
// } else {
// alert('Not quite!')
// console.log('Not quite!'); incorrect answer to 'Have I worked as a nanny'
// }

// var bethCountry = prompt('Have I lived in more than one country?');
// bethCountry = bethCountry.toLocaleLowerCase();

// if(bethCountry === 'yes' || bethCountry === 'y') {
//    alert('That is correct!')
//     console.log('That is correct!); correct answer to 'Have I lived in more than one country'
// } else {
// alert('Not quite!')
// console.log('Not quite!'); incorrect answer to 'Have I lived in more than one country'
// }

// // var travelNumberGuesses = 4
// // var bethTravel = parseInt(prompt('How many countries do you think I have visited?'))
// // console.log(typeof bethTravel);
// // while (travelNumberGuesses > 0) {
// //     //if(travelNumberGuesses = 0)
// //     //{alert('The correct answer is 20!')}
// //     if(bethTravel === 20){ 
// //         alert('That is correct!');
// //         travelNumberGuesses = 0;
// //         console.log(travelNumberGuesses);
// //     } else if (bethTravel < 20) {
// //         alert('Too low!');
// //         travelNumberGuesses - 1;
// //         console.log(travelNumberGuesses);
// //         bethTravel = parseInt(prompt('How many countries do you think I have visted?'));
// //     } else if(bethTravel > 20) {
// //         alert('Too high!');
// //         travelNumberGuesses - 1;
// //         bethTravel = parseInt(prompt('How many countries do you think I have visted?'));
// //         console.log(travelNumberGuesses);
// //     }

// // } 

// var bethLive = prompt('Which of these countries have I not lived in?')


// alert('Thanks for taking the time to get to know me, ' + visitorName + '!');
