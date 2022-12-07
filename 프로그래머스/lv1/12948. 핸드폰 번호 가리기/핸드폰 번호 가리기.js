function solution(phone_number) {
    var answer = [];
    let arr = phone_number.split('');

    for (let i = arr.length - 4; i < arr.length; i++) {
        answer.push(arr[i]);
    }
    for (let j = 0; j < arr.length - 4; j++) {
        answer.unshift('*');
    }
    return answer.join('');
}