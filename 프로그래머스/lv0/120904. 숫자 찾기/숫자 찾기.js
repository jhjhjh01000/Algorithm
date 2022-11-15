function solution(num, k) {
    var answer = 0;
    k = k.toString();
    let array = num.toString().split('');
    if (array.includes(k)) {
        answer = array.indexOf(k) + 1;
    } else
        answer = -1;
    return answer;
}