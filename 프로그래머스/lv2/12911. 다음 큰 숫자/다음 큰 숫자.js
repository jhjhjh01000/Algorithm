function solution(n) {
    function countOnes(binaryStr) {
        let count = 0;
        for (let i = 0; i < binaryStr.length; i++) {
            if (binaryStr.charAt(i) === '1') count++;
        }
        return count;
    }
    
    function getNextNum(currentNum) {
        if (countOnes(currentNum.toString(2)) === countOnes(n.toString(2))) return currentNum;
        return getNextNum(currentNum + 1);
    }
    return getNextNum(n + 1);
}