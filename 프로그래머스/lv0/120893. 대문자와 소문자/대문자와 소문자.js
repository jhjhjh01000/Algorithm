function solution(my_string) {
    var answer = '';
    let array = my_string.split('');
    for (let i in array) {
        if (array[i] === array[i].toUpperCase() &&
           array[i] !== array[i].toLowerCase()) {
            answer += array[i].toLowerCase();
        } else
            answer += array[i].toUpperCase();
    }
    return answer;
}