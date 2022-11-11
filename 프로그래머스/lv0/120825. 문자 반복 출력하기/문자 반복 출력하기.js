function solution(my_string, n) {
    var answer = '';
    let array = my_string.split('');
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < n; j++) {
            answer += array[i];
        }
    }
    return answer;
}