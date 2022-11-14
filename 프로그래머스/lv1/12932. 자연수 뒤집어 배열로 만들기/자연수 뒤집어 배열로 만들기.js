function solution(n) {
    var answer = [];
    let array = n.toString().split('').reverse();
    for (let i = 0; i < array.length; i++) {
        answer.push(parseInt(array[i]))
    }

    return answer;
}