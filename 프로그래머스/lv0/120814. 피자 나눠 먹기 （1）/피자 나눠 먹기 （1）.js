function solution(n) {
    let answer = 0;
    if (n === 0) {
        answer = 0;
    } else if (n <= 7) {
        answer = 1;
    } else {
        if (n % 7 !== 0) {
         answer = Math.floor((n / 7) + 1);   
        } else {
            answer = Math.floor(n / 7);
        }
    }
    return answer;
}