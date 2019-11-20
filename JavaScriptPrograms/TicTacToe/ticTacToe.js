let readline = require('readline-sync')
let util = require('./methods')
let obj = new util.TicTacToeMethods()

manage = () => {
    let player1 = 'X', player2 = 'O';
    let play = 1;

    let matrix = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ]

    console.log(matrix[0][0] + " | " + matrix[0][1] + " | " + matrix[0][2]);
    console.log(matrix[1][0] + " | " + matrix[1][1] + " | " + matrix[1][2]);
    console.log(matrix[2][0] + " | " + matrix[2][1] + " | " + matrix[2][2]);

    for (let i = 1; i < 10; i++) {
        if (play == 1) {
            console.log("Player1 ='X'");
            let position = readline.question();
            obj.displayMatrix(matrix, position, player1);
            obj.show(matrix)
            play = 2;
        }
        else {
            console.log("Player2 ='O'");
            let position = readline.question();
            obj.displayMatrix(matrix, position, player2);
            obj.show(matrix)
            play = 1;
        }
    }
    // obj.show(matrix)
    let win = obj.checkWin(matrix)
    console.log(win);

    if (win != '') {
        if (win == 'X')
            console.log("Player 1 win");
        else if(win == 'O')
            console.log("Player 2 win");
        else
            console.log("Draw");
    }
}

module.exports = manage()



