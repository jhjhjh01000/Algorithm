function solution(n) {
    var answer = [];
    for (let i = 0; i <= n; i++) {
        (i % 2 !== 0) ? answer.push(i) : 0;
    }
    return answer;
}