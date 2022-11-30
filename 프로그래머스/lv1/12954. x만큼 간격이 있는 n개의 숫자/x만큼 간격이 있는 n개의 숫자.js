function solution(x, n) {
    var answer = [];
    
    for (let i = 1; i < n + 1; i++) {
        let count = x * i;
        answer.push(count);
    }
    return answer;
}