function solution(n) {
    let sumEvenNum = 0;
    for (i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sumEvenNum += i;
        }
    }
    return sumEvenNum;
}