let flipCoin=require('./utility');
let readline=require('readline-sync');
let coin=readline.questionInt(" Enter How many times Flip the Coin  ");
flipCoin.flipCoin(coin);

