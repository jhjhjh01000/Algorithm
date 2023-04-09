function solution(i, j, k) {
    var answer = 0;
    
    for (let n = i; n <= j; n++) {
        let numArr = n.toString().split('')
        for (let num = 0; num <= numArr.length-1; num++) {
            if (numArr[num] === k.toString()) {
                answer++;
            }
        }
    }
    return answer;
}