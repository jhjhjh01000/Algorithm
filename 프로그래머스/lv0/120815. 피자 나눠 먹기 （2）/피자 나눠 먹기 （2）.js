function solution(n) {
    var answer = 0;
    if (6 % n === 0) {
        answer = Math.floor(6 / n);
    }
    for (let i = 1; i < n+1; i++) {
        if ((i * 6) % n === 0) {
            answer = i;
            break;
        }
    }    
    return answer;
}