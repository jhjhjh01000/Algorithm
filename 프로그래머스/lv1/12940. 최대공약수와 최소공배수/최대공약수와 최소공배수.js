function solution(n, m) {
    let answer = [];
    let temp2 = n * m
    while (m !== 0) {
        const temp = m;
        m = n % m;
        n = temp;
    }
    answer.push(n)
    answer.push(temp2 / n)
    
    return answer;
}