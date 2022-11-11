function solution(n) {
    var answer = 0;
    n = n.toString();
    let array = n.split('');
    for (let i in array) {
        answer += parseInt(array[i]);
    }
    return answer;
}