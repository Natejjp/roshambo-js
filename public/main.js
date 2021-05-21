function main() {}
// let enter = false
let playerChoiceOne = ''
let playerChoiceTwo = ''
function updateSelectionRockOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'rock'
  playerChoiceOne = 'rock'
}

document
  .querySelector('.rockOne')
  .addEventListener('click', updateSelectionRockOne)

function updateSelectionPaperOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'paper'
}

document
  .querySelector('.paperOne')
  .addEventListener('click', updateSelectionPaperOne)

function updateSelectionScissorsOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'scissors'
}

document
  .querySelector('.scissorsOne')
  .addEventListener('click', updateSelectionScissorsOne)

function updateSelectionRockTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'rock'
}

document
  .querySelector('.rockTwo')
  .addEventListener('click', updateSelectionRockTwo)

function updateSelectionPaperTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'paper'
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

function finalOne(event) {
  if (
    (playerChoiceOne === 'rock' && playerChoiceTwo === 'scissors') ||
    (playerChoiceOne === 'paper' && playerChoiceTwo === 'rock') ||
    (playerChoiceOne === 'scissors' && playerChoiceTwo === 'paper')
  ) {
    window.alert('player one won')
  }
}
document.querySelector('.buttonOne').addEventListener('click', finalOne)

document.addEventListener('DOMContentLoaded', main)
