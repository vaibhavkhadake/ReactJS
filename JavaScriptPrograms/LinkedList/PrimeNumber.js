
class PrimeNumber {
    displayPrime(start, end) {
        let primeArray = [];
        let count = 0;

        for (let i = start; i <= end; i++) {
            let flag = 0;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                primeArray.push(i)
                count++;
            }
        }
        return primeArray
    }

    displayAnagram(primeArray) {
        let anagramArray = [];
        let notAnagram = [];
        let isNotFind;

        for (let i = 0; i < primeArray.length; i++) {
            let first = " ", strSpilt1 = [];
            first = first + primeArray[i];
            strSpilt1 = first.split(" ");
            strSpilt1.sort()
            first=strSpilt1.toString("");

            for (let j = i + 1; j < primeArray.length; j++) {

                isNotFind = true;
                let second = " ", strSpilt2 = [];
                second = second + primeArray[j];
                strSpilt2 = second.split(" ");
                strSpilt2.sort();
                second=strSpilt2.toString("");

                if (first == second) {
                    anagramArray.push(primeArray[i])
                    anagramArray.push(primeArray[j])
                    isNotFind = false;
                    break;
                }
            }

            if (isNotFind) {
                notAnagram.push(primeArray[i])
            }
            return [anagramArray,notAnagram]
        }

    }

}
module.exports = {
    PrimeNumber
}
