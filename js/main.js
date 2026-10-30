


let tittle = document.querySelector('.tittle');

let turn = 'x';

let squars = [];

let gameOver = false;







// Winner Function

function end(num1, num2, num3) {

    gameOver = true;

    tittle.innerHTML = `${squars[num1]} winner`;

    document.getElementById("item" + num1).classList.add("winner-square");
    document.getElementById("item" + num2).classList.add("winner-square");
    document.getElementById("item" + num3).classList.add("winner-square");



    let interval = setInterval(function () {
        tittle.innerHTML += '.';
       
    }, 1000);

    setTimeout(function () {
        location.reload();
    }, 4000);
}


// Check Winner Function

function winner() {

    for (let i = 1; i < 10; i++) {
        squars[i] = document.getElementById("item" + i).innerHTML;
    }

    if (squars[1] == squars[2] && squars[2] == squars[3] && squars[1] != '') {
        end(1, 2, 3);

    } else if (squars[4] == squars[5] && squars[5] == squars[6] && squars[4] != '') {
        end(4, 5, 6);

    } else if (squars[7] == squars[8] && squars[8] == squars[9] && squars[7] != '') {
        end(7, 8, 9);

    } else if (squars[1] == squars[4] && squars[4] == squars[7] && squars[1] != '') {
        end(1, 4, 7);

    } else if (squars[2] == squars[5] && squars[5] == squars[8] && squars[2] != '') {
        end(2, 5, 8);

    } else if (squars[3] == squars[6] && squars[6] == squars[9] && squars[3] != '') {
        end(3, 6, 9);

    } else if (squars[1] == squars[5] && squars[5] == squars[9] && squars[1] != '') {
        end(1, 5, 9);

    } else if (squars[3] == squars[5] && squars[5] == squars[7] && squars[3] != '') {
        end(3, 5, 7);

    } else if (
        squars[1] != '' &&
        squars[2] != '' &&
        squars[3] != '' &&
        squars[4] != '' &&
        squars[5] != '' &&
        squars[6] != '' &&
        squars[7] != '' &&
        squars[8] != '' &&
        squars[9] != ''
    ) {

        gameOver = true;
        tittle.innerHTML = "Draw! Click to restart";
    }
}


// Game Mode
let mode = 'pvp';

let modeButtons = document.querySelectorAll('.game-select > div');


// Choose Game Mode

modeButtons.forEach(function (button) {

    button.onclick = function () {

        mode = button.dataset.mode;

        modeButtons.forEach(function (item) {
            item.classList.remove('select');
        });

        button.classList.add('select');

        resetGame();

    };

});


// Game Function

function game(id) {

    let element = document.getElementById(id);
    if (mode === 'pvc' ){

        if (turn === 'x' && element.innerHTML === '' && !gameOver) {
    
            element.innerHTML = 'x';
    
            turn = 'o';
    
            tittle.innerHTML = 'o';
    
            winner();
    
            if (!gameOver) {
    
                setTimeout(function () {
                    computer();
                }, 500);
    
            }
        }
    }


    else if (mode ==='pvp'){
        if (turn === 'x' && element.innerHTML === '' && !gameOver) {

            element.innerHTML = 'x';

            turn = 'o';

            tittle.innerHTML = 'o';

            winner();}

            else if (turn === 'o' && element.innerHTML === '' &&!gameOver) {
            element.innerHTML = 'o';

            turn = 'x';

            tittle.innerHTML = 'x';
            winner();

            }
        }
    }



// Computer Function

function computer() {

    let empty = [];

    // Get empty squares

    for (let i = 1; i < 10; i++) {

        if (document.getElementById('item' + i).innerHTML === '') {

            empty.push(i);

        }
    }

    // Choose random square

    if (empty.length > 0 && !gameOver) {

        let random = Math.floor(Math.random() * empty.length);

        let choise = empty[random];

        // Put O

        document.getElementById('item' + choise).innerHTML = 'o';

        turn = 'x';

        tittle.innerHTML = 'x';

        winner();

    }
}



function resetGame(){
    turn = 'x';
    gameOver = false;
    tittle.innerHTML = 'x';

    for (let i = 1; i < 10; i++) {
        document.getElementById('item' + i).innerHTML = '';
    }
}









