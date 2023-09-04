function solution(k, m, score) {
    let answer = 0;
    let arr = [];
    let appleBox = Math.floor(score.length / m)
    score = score.sort((a, b) => b - a);
    
    for (let i = 0; i < appleBox; i++) {
        arr.push(score.slice(i * m, (i + 1) * m))    
    }
    
    answer = arr.map((item) => item.sort((a, b) => a - b)[0] * m)
    answer = answer.reduce((acc, cur) => acc + cur, 0)
    
    return answer;
}