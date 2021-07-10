// CAHIPUN
// VALORES ["piedra", "papel", "tijera"];
var handRock = 0;
var handPaper = 1;
var handScissor = 2;

// SCORE
var userScore = 0;
var machineScore = 0;
var drawScore = 0;

// MENSAJE RESULTADO
var winner = "GANADOR";
var loser = "PERDEDOR";
var draw = "EMPATE";

// CANTIDAD DE JUEGOS
let cachipunGame = document.querySelector("#startGame");
cachipunGame.addEventListener('click', function () {
    gameAmount = parseInt(document.getElementById("gameAmountID").value); // Cantidad de juegos
    activeGame();
    return gameAmount;
});

// ACTIVE GAME COUNTING
function activeGame() {
    if (gameAmount >= 1) {
        showSelectionButton(gameAmount); // Muestra los botones
        document.getElementById("numberGameAmount").innerHTML = gameAmount; // Muestra el valor
    } else {
        document.getElementById("numberGameAmount").innerHTML = 0;
        document.getElementById("selectionBotton").style.display = "none";
    }
}

// SHOW BUTTON
function showSelectionButton(gameAmount) {
    if (gameAmount >= 1) {
        document.getElementById("selectionBotton").style.display = "inline";
    } else {
        document.getElementById("selectionBotton").style.display = "none";
    }
}

// DECREASE
function decrese() {
    if (gameAmount < 100 && gameAmount > 0) {
        gameAmount = gameAmount - 1;
        document.getElementById("numberGameAmount").innerHTML = gameAmount;
    } else {
        document.getElementById("selectionBotton").style.display = "none";
    }
};

// ELECCION DEL JUGADOR
function electionMenu(value) {
    if (value == 0) {
        console.log("piedra");
        startGame(0); // PIEDRA

    } else if (value == 1) {
        console.log("papel");
        startGame(1); // PAPEL

    } else {
        console.log("tijera");
        startGame(2); //TIJERA

    }
}

// START GAME
function startGame(value) {
    decrese(); // DECREASE NUMBER
    let userChoose = value;
    let machineChoose = Math.floor(Math.random() * 3);

    if (userChoose == 0) { // USUARIO - PIEDRA
        document.getElementById("userResponse").innerHTML = `<i class='px-2 far fa-hand-rock fa-10x'></i>`;
        if (machineChoose == 1) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-paper fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = loser;
            document.getElementById("machineResult").innerHTML = winner;
            machineScore++; // maquina gana
        } else if (machineChoose == 2) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-scissors fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = winner;
            document.getElementById("machineResult").innerHTML = loser;
            userScore++; // usuario gana
        } else {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-rock fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = draw;
            document.getElementById("machineResult").innerHTML = draw;
            drawScore++; // empate
        }

    } else if (userChoose == 1) { // USUARIO - PAPEL
        document.getElementById("userResponse").innerHTML = `<i class='px-2 far fa-hand-paper fa-10x'></i>`;
        if (machineChoose == 2) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-scissors fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = loser;
            document.getElementById("machineResult").innerHTML = winner;
            machineScore++; // maquina gana
        } else if (machineChoose == 0) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-rock fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = winner;
            document.getElementById("machineResult").innerHTML = loser;
            userScore++; // usuario gana
        } else {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-paper fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = draw;
            document.getElementById("machineResult").innerHTML = draw;
            drawScore++; // empate
        }

    } else { // // USUARIO - TIJERA
        document.getElementById("userResponse").innerHTML = `<i class='px-2 far fa-hand-scissors fa-10x'></i>`;
        if (machineChoose == 1) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-paper fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = winner;
            document.getElementById("machineResult").innerHTML = loser;
            userScore++; // usuario gana
        } else if (machineChoose == 0) {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-rock fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = loser;
            document.getElementById("machineResult").innerHTML = winner;
            machineScore++; // maquina gana
        } else {
            document.getElementById("machineResponse").innerHTML = `<i class='px-2 far fa-hand-scissors fa-10x'></i>`;
            // SCORE
            document.getElementById("userResult").innerHTML = draw;
            document.getElementById("machineResult").innerHTML = draw;
            drawScore++; // empate
        }
    }
    if (gameAmount == 0) { //CLEAN
        document.getElementById("selectionBotton").style.display = "none";
        alert(`El puntaje es el siguiente: \n Jugador = ${userScore} \n Maquina = ${machineScore} \n Empate = ${drawScore}`);
        document.getElementById("userResponse").innerHTML = ``;
        document.getElementById("machineResponse").innerHTML = ``;
        document.getElementById("userResult").innerHTML = ``;
        document.getElementById("machineResult").innerHTML = ``;
    }
};