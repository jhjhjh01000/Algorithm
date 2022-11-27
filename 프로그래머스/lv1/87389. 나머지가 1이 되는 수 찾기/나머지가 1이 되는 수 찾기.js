function solution(n) {
    var answer = 0;
    const arr = [];
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            arr.push(i);
            answer = arr[0];
        }
    }
    return answer;
}