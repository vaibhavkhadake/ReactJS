module.exports = {

    flipCoin(coin) {
        try {
            let head = 0, tail = 0;
            for (let i = 0; i < coin; i++) {
                if (Math.random() > 0.5) {
                    head++;
                }
                else {
                    tail++;
                }
            }
            console.log(" Head ", head);
            console.log(" Tail ", tail);
            console.log(" Head percentage ", ((head*100)/coin));
            console.log(" Tail percentage ", ((tail*100)/coin));
        }
        catch (error) {
            console.log("Error occured");
        }
    }
}