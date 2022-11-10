function solution(numbers) {
    var answer = 0;
    let array = [...numbers];
    array.sort((a, b) => a - b);
    answer = array[(array.length -  1)] * array[(array.length - 2)];
    return answer;
}