function solution(price, money, count) {
    let answer = 0;
    
    for (let i = 1; i <= count; i++) {
        answer += price * i;
        console.log(answer)
    }
    answer = (money - answer) < 0 ? (money - answer) * -1 : 0; 

    return answer;
}