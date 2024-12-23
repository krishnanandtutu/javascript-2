let randomnumber =parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot= document.querySelector('.Guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p'); 

let prevGuess=[];
let numGuess=1;

let playGame= true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })

    
}

function  validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter avalid no')
    }
    else if(guess<1){
        alert('please enter  no greater than 1')
    }
    else if(guess>100){
        alert('please enter  no less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(` Game over .. Random number was ${randomnumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage('Great you have guessed right')
        endGame()
    }
    if(guess < randomnumber){
        displayMessage(' you guessed too low')
        
    }
    if(guess > randomnumber){
        displayMessage('you guessed too high')
        
    }

}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML +=`${guess},`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    userInput.value='';
    //console.log('hi')
    userInput.setAttribute('disabled','');
    //console.log('hi')
    p.classList.add('button');
    //console.log('hi')
    p.innerHTML='<h5 id ="newGame">start new Game</h5>';
    //console.log('hi')
    startover.appendChild(p);
    //console.log('hi')
    playGame=false;
    //console.log('hi')
    newGame();
    //console.log('hi')
}
function newGame(){
    const newGameButton= document.querySelector('#newGame')
    //console.log('hi')

    newGameButton.addEventListener('click',function(e){
        console.log('hi')
        randomnumber=parseInt(Math.random()* 100 + 1);
        console.log('hi')
        prevGuess=[]
        console.log('hi')
        numGuess=1; 
        console.log('hi')
        guessSlot.innerHTML=''
        console.log('hi')
        remaining.innerHTML=`${11-numGuess}`;
        console.log('hi')
        userInput.removeAttribute('disabled')
        console.log('hi')
        startover.removeChild(p)
        console.log('hi')
        playGame=true;
        console.log('hi')
    });
}