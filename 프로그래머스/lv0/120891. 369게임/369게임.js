function solution(order) {
    var answer = 0;
    
    let orderStr = order.toString().split('');
    for(let i = 0; i < orderStr.length; i++) {
        if (parseInt(orderStr[i]) !== 0 && parseInt(orderStr[i]) % 3 === 0) {
            answer++;
        }
    }
    return answer;
}