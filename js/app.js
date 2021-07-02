/* check if the user is logged in  */
if(localStorage.getItem('username')){
    document.getElementById('welcome-text').innerHTML = 'welcome' + localStorage.getItem('username')
}

/* return a collection  */
const images = Array.from(document.getElementsByClassName('display-image'))
const marble = 'images/marble.jpg'
const wrong = 'images/wrong.jpg'
const default_image = 'images/cup.jpg'
let clickCorrect = false;
let wrongLives = 2;
let correct_answer ;

let current_score = 0
let attempGames = 1
//console.log(images)


//count how many answer 
function resetGame() {
    for (let i = 0; i < images.length; i++) {
        images[i].src = default_image
    }
    //resetting
    guessRandom();
    wrongLives = 2 ;
    clickCorrect = false;

    attempGames +=1 ;
    if(attempGames === 6){
        /*  console will be replacd with the backend API */
        postToBackend()
        attempGames = 0 ;
        current_score = 0;
        document.getElementById('score').innerHTML = current_score
    }
}

function increaseScore(){
    document.getElementById('score').innerHTML = current_score+1
    current_score++
}
function  guessRandom(){
     correct_answer = Math.ceil(Math.random() * 5)
    console.log(correct_answer)
}
function postToBackend(){
    const name = localStorage.getItem('username')
    if(name){
        const score = current_score;
        postScore(name,score)
    }
    document.getElementById('result').innerHTML = "your score is " + current_score
}

// get a random number 

guessRandom()

function correctAnswerAction() {
    document.getElementById(correct_answer).src = marble
    clickCorrect = true
    increaseScore()
}

function wrongAnswerAction(guess) {
    document.getElementById(guess).src = wrong
    wrongLives--;
}



for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        if (!clickCorrect && wrongLives != 0) {
            if (i + 1 == correct_answer) {
                //console.log('you are correct')
                correctAnswerAction()
            }
            else {
                // console.log('you are wrong')
                wrongAnswerAction(i + 1)
            }
        }

    })
}