function solution(rsp) {
    var answer = '';
    let array = rsp.split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '2') {
            answer += '0'
        } else if (array[i] === '0') {
            answer += '5'
        } else if (array[i] === '5') {
            answer += '2'
        }
    }
    return answer;
}