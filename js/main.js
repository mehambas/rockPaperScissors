/* algoritma psuedocode */


// user rock == comp rock -> berabere
// user rock == comp paper -> comp kazanir
// user rock == comp scissors -> user kazanir

// user paper == comp rock -> user kazanir
// user paper == comp paper -> berabere
// user paper == comp scissors -> comp kazanir

// user scissors == comp rock -> comp kazanir
// user scissors == comp paper -> user kazanir
// user scissors == comp scissors -> berabere


const article = document.getElementById('moves_left');
const span_user = document.getElementById('user-span');
const span_comp = document.getElementById('comp-span');
const restartEl = document.getElementById('restart');

eventListener();

function eventListener() {
    article.addEventListener('click', whoWins);
    article.addEventListener('click', afterClick);
    restartEl.addEventListener('click', restartBtn);
}


const userScoreEl = document.getElementById('user_score');
const compScoreEl = document.getElementById('comp_score');

var userScore = [];
var compScore = [];




function whoWins(e) {
    const randomSayi = Math.floor(Math.random() * 3);
    const movesRight = document.querySelectorAll('.moves_el');
    const result = document.getElementById('result');






    /* if functions for all possibilities*/

    if (e.target.className == 'far fa-hand-rock fa-4x' && movesRight[randomSayi].id == 'rock') {

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'Its a draw, try again';
            result.setAttribute('style', 'color: yellow');
            document.getElementById('user-span').className = 'badge bg-warning user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-warning comp_span position-absolute';
            compScoreEl.classList.add('text-warning');
            userScoreEl.classList.add('text-warning');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-warning');
            userScoreEl.classList.remove('text-warning');
        }, 1500);


    } else if (e.target.className == 'far fa-hand-rock fa-4x' && movesRight[randomSayi].id == 'paper') {

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You lose, paper beats rock! Try again';
            result.setAttribute('style', 'color: #dc3545;');
            document.getElementById('comp-span').className = 'badge bg-success comp_span position-absolute';
            compScore.push('');

            compScoreEl.innerHTML = compScore.length;
            compScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-success');
        }, 1500);

    } else if (e.target.className == 'far fa-hand-rock fa-4x' && movesRight[randomSayi].id == 'scissors') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You win! Rock beats scissors.';
            result.setAttribute('style', 'color: #07ff83 !important;');
            document.getElementById('user-span').className = 'badge bg-success user_span position-absolute';
            userScore.push('');

            userScoreEl.innerHTML = userScore.length;
            userScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            userScoreEl.classList.remove('text-success');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-paper fa-4x' && movesRight[randomSayi].id == 'rock') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You win! Paper beats rock.';
            result.setAttribute('style', 'color: #07ff83 !important;');
            document.getElementById('user-span').className = 'badge bg-success user_span position-absolute';
            userScore.push('');

            userScoreEl.innerHTML = userScore.length;
            userScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            userScoreEl.classList.remove('text-success');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-paper fa-4x' && movesRight[randomSayi].id == 'paper') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'Its a draw, try again';
            result.setAttribute('style', 'color: yellow');
            document.getElementById('user-span').className = 'badge bg-warning user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-warning comp_span position-absolute';
            compScoreEl.classList.add('text-warning');
            userScoreEl.classList.add('text-warning');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-warning');
            userScoreEl.classList.remove('text-warning');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-paper fa-4x' && movesRight[randomSayi].id == 'scissors') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You lose. Scissors beats paper.';
            result.setAttribute('style', 'color: #dc3545;');
            document.getElementById('comp-span').className = 'badge bg-success comp_span position-absolute';
            compScore.push('');

            compScoreEl.innerHTML = compScore.length;
            compScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-success');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-scissors fa-4x' && movesRight[randomSayi].id == 'rock') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You lose, rock beats scissors.';
            result.setAttribute('style', 'color: #dc3545;');
            document.getElementById('comp-span').className = 'badge bg-success comp_span position-absolute';
            compScore.push('');

            compScoreEl.innerHTML = compScore.length;
            compScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-success');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-scissors fa-4x' && movesRight[randomSayi].id == 'paper') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'You win, scissors beats paper!';
            result.setAttribute('style', 'color: #07ff83 !important;');
            document.getElementById('user-span').className = 'badge bg-success user_span position-absolute';
            userScore.push('');

            userScoreEl.innerHTML = userScore.length;
            userScoreEl.classList.add('text-success');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            userScoreEl.classList.remove('text-success');
        }, 1500);
    } else if (e.target.className == 'far fa-hand-scissors fa-4x' && movesRight[randomSayi].id == 'scissors') {
        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #07ff83 !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #07ff83;');

        }, 10);

        setTimeout(() => {
            movesRight[randomSayi].childNodes[0].childNodes[0].setAttribute('style', 'color: #dc3545; !important;');
            movesRight[randomSayi].setAttribute('style', 'border: 1px solid #f3b0b04d;');
        }, 1500);

        setTimeout(() => {
            result.innerHTML = 'Its a draw, try again';
            result.setAttribute('style', 'color: yellow');
            document.getElementById('user-span').className = 'badge bg-warning user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-warning comp_span position-absolute';
            compScoreEl.classList.add('text-warning');
            userScoreEl.classList.add('text-warning');
        }, 100);

        setTimeout(() => {
            result.innerHTML = 'Let`s make your choice';
            result.setAttribute('style', 'color: white;');
            document.getElementById('user-span').className = 'badge bg-danger user_span position-absolute';
            document.getElementById('comp-span').className = 'badge bg-danger comp_span position-absolute';
            compScoreEl.classList.remove('text-warning');
            userScoreEl.classList.remove('text-warning');
        }, 1500);


    }


}

/* userHandSigns color delay */

function afterClick(e) {
    setTimeout(() => {

        e.target.setAttribute('style', 'color: #07ff83 !important;');
        e.target.parentElement.parentElement.setAttribute('style', 'border: 1px solid #07ff83 !important;');
        document.getElementsByTagName('main')[0].setAttribute('style', 'border: none !important;');
    }, 10);

    setTimeout(() => {
        e.target.setAttribute('style', 'color: #dc3545 !important;');
        e.target.parentElement.parentElement.setAttribute('style', 'border: 1px solid #dc3545 !important;');
        document.getElementsByTagName('main')[0].setAttribute('style', 'border: none !important;');
    }, 1500);

}

/* restart button */


function restartBtn() {


    userScore = userScore.splice(0, 0);
    userScoreEl.innerHTML = userScore.length;


    compScore = compScore.splice(0, 0);
    compScoreEl.innerHTML = compScore.length;

}