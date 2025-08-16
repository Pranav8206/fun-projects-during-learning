let number = Math.max(1,parseInt(Math.random()*100))
// let number = 20
console.log(number);

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#input")
const previousGuess = document.querySelector(".previous-guess")
const remaining = document.querySelector(".remaining")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert("Invalid Input: Please enter a valid number.")
    } else if (guess < 1){
        alert("Please enter a number more than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if (numGuess=== 10){
            displayGuess(guess)
            displayMessage(`❌ Mission Failed :Correct number was ${number}.` )
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
        console.log(guess , typeof guess)
        console.log(number , typeof number)
    if (guess == number) {

        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < number) {
        displayMessage(`Target number is greater than ${guess}. Continue search.`)
    } else if (guess > number) {
        displayMessage(`Target number is lower than ${guess}`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    previousGuess.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        number = Math.max(1,parseInt(Math.random()*100))
        prevGuess = []
        numGuess = 1
        previousGuess.innerHTML = ''
        remaining.innerHTML = 10
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", '')
    p.classList.add('p')
    p.innerHTML = `<span id="win">🎯You Win: <span id="newGame">Start new Game</span></span>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}