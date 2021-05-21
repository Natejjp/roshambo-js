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
  playerChoiceOne = 'paper'
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

function updateSelectionSpockOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'spock'
  playerChoiceOne = 'spock'
}

document
  .querySelector('.spockOne')
  .addEventListener('click', updateSelectionSpockOne)

function updateSelectionLizardOne(event) {
  const selectionOne = document.querySelector('.choiceOne')
  selectionOne.textContent = 'lizard'
  playerChoiceOne = 'lizard'
}

document
  .querySelector('.lizardOne')
  .addEventListener('click', updateSelectionLizardOne)

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

function updateSelectionSpockTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'spock'
  playerChoiceTwo = 'spock'
}

document
  .querySelector('.spockTwo')
  .addEventListener('click', updateSelectionSpockTwo)

function updateSelectionLizardTwo(event) {
  const selectionTwo = document.querySelector('.choiceTwo')
  selectionTwo.textContent = 'lizard'
  playerChoiceTwo = 'lizard'
}

document
  .querySelector('.lizardTwo')
  .addEventListener('click', updateSelectionLizardTwo)

function final(event) {
  if (playerChoiceOne === playerChoiceTwo) {
    window.alert('draw')
  } else if (
    (playerChoiceOne === 'rock' && playerChoiceTwo === 'scissors') ||
    (playerChoiceOne === 'paper' && playerChoiceTwo === 'rock') ||
    (playerChoiceOne === 'scissors' && playerChoiceTwo === 'paper') ||
    (playerChoiceOne === 'rock' && playerChoiceTwo === 'lizard') ||
    (playerChoiceOne === 'scissors' && playerChoiceTwo === 'lizard') ||
    (playerChoiceOne === 'paper' && playerChoiceTwo === 'spock') ||
    (playerChoiceOne === 'spock' && playerChoiceTwo === 'scissors') ||
    (playerChoiceOne === 'spock' && playerChoiceTwo === 'rock') ||
    (playerChoiceOne === 'lizard' && playerChoiceTwo === 'spock') ||
    (playerChoiceOne === 'lizard' && playerChoiceTwo === 'paper')
  ) {
    window.alert('player one won')
  } else {
    window.alert('player two won')
  }
}
document.querySelector('.buttonOne').addEventListener('click', final)

document.addEventListener('DOMContentLoaded', main)
