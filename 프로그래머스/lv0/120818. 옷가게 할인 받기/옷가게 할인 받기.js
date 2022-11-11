function solution(price) {
    var answer = 0;
    (price >= 500000) ? answer = Math.floor(price * 0.8)
    : (price >= 300000) ? answer = Math.floor(price * 0.9)
    : (price >= 100000) ? answer = Math.floor(price * 0.95)
    : answer = price;
    return answer;
}