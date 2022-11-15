function solution(cipher, code) {
    var answer = '';
    let array = cipher.split('');
    for (let i = 0; i < array.length; i++) {
        (i + 1) % code === 0 ? answer += array[i] : answer;
    }
    return answer;
}