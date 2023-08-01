function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    console.log(answer.length)
    return answer.length > 0 ? answer.sort((a,b) => a - b) : answer = [-1];
}