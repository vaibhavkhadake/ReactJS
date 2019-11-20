
class TicTacToeMethods
 {
    displayMatrix(matrix, position, player)
      {
          
        if (position == 1)
            matrix[0][0] = player
        else if (position == 2)
            matrix[0][1] = player
        else if (position == 3)
            matrix[0][2] = player
        else if (position == 4)
            matrix[1][0] = player
        else if (position == 5)
            matrix[1][1] = player
        else if (position == 6)
            matrix[1][2] = player
        else if (position == 7)
            matrix[2][0] = player
        else if (position == 8)
            matrix[2][1] = player
        else if (position == 9)
            matrix[2][2] = player
    }

    checkWin(matrix) 
    {
        let temp = ' ';
        //row-wise
        if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2])
            temp = matrix[0][0]
        else if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2])
            temp = matrix[1][0]
        else if (matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2])
            temp = matrix[2][0]

        //Column-wise
        else if (matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[1][2])
            temp = matrix[0][0]
        else if (matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1])
            temp = matrix[0][1]
        else if (matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2])
            temp = matrix[0][2]

        //Diagonal
        else if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2])
            temp = matrix[0][0]
        else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])
            temp = matrix[0][2]

         return temp
    }

    show(matrix)  
    {
        console.log(matrix[0][0] + " | " + matrix[0][1] + " | " + matrix[0][2]);
        console.log(matrix[1][0] + " | " + matrix[1][1] + " | " + matrix[1][2]);
        console.log(matrix[2][0] + " | " + matrix[2][1] + " | " + matrix[2][2]);
    }

}

module.exports = {
    TicTacToeMethods
}