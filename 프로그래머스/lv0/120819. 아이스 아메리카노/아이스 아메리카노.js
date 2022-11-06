function solution(money) {
    var answer = [0,0];
    for (let i = 0; i <= money; i += 5500 ) {
        answer[0] = Math.floor(money / 5500);
        if (money % 5500 !== 0) {
            answer[1] = money - i;
        }
    }
    return answer;
}