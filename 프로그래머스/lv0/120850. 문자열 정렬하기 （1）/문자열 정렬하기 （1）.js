function solution(my_string) {
    var answer = [];
    let array = my_string.split('');
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 1 === 0) {
            answer.push(parseInt(array[i]));
        }
    }
    return answer.sort();
}