var flipCoin=require('./utility');
var readline=require('readline-sync');
var coin=readline.questionInt(" Enter How many times Flip the Coin  ");
flipCoin.flipCoin(coin);

