function solution(array) {
    var answer = 0;
    array.sort((a, b) => a - b);
    for (let i in array) {
        let index = Math.floor(i / 2);
        answer = array[index];
    }
    return answer;
}