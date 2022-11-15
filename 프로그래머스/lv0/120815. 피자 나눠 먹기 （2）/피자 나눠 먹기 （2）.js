function solution(n) {
    var answer = 0;
    let i = 1;
    while (true) {
        if ((i * 6) % n === 0) {
            answer = i;
            break;
        } else
            i++;
    }
    return answer;
}