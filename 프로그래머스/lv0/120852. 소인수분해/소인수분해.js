function solution(n) {
    let answer = [];
    let num = 2;
    
    while (n >= 2) {
        if (n % num === 0) {
            if(!(answer.includes(num)))
            answer.push(num);
            n = n / num;
        } else {
            num++;
        }
    }
    return answer;
}