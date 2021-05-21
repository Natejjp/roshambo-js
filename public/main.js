function main() {}
// let enter = false
let playerChoiceOne = ''
let playerChoiceTwo = ''
function updateSelectionRockOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'rock'
  playerChoiceOne = 'rock'
  playerChoiceOne = 'rock'
}

document
  .querySelector('.rockOne')
  .addEventListener('click', updateSelectionRockOne)

function updateSelectionPaperOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'paper'
  playerChoiceOne = paper
}

document
  .querySelector('.paperOne')
  .addEventListener('click', updateSelectionPaperOne)

function updateSelectionScissorsOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'scissors'
  playerChoiceOne = 'scissors'
}

document
  .querySelector('.scissorsOne')
  .addEventListener('click', updateSelectionScissorsOne)

function updateSelectionRockTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'rock'
  playerChoiceTwo = 'rock'
}

document
  .querySelector('.rockTwo')
  .addEventListener('click', updateSelectionRockTwo)

function updateSelectionPaperTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'paper'
  playerChoiceTwo = 'paper'
}

document
  .querySelector('.paperTwo')
  .addEventListener('click', updateSelectionPaperTwo)

function updateSelectionScissorsTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'scissors'
  playerChoiceTwo = 'scissors'
}

document
  .querySelector('.scissorsTwo')
  .addEventListener('click', updateSelectionScissorsTwo)

function final(event) {
  if (playerChoiceOne === playerChoiceTwo) {
    window.alert('draw')
  } else if (
    (playerChoiceOne === 'rock' && playerChoiceTwo === 'scissors') ||
    (playerChoiceOne === 'paper' && playerChoiceTwo === 'rock') ||
    (playerChoiceOne === 'scissors' && playerChoiceTwo === 'paper')
  ) {
    window.alert('player one won')
  } else if (
    (playerChoiceTwo === 'rock' && playerChoiceOne === 'scissors') ||
    (playerChoiceTwo === 'paper' && playerChoiceOne === 'rock') ||
    (playerChoiceTwo === 'scissors' && playerChoiceOne === 'paper')
  ) {
    window.alert('player two won')
  }
}
document.querySelector('.buttonOne').addEventListener('click', final)

document.addEventListener('DOMContentLoaded', main)
