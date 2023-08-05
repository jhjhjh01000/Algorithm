function solution(s) {
    let answer = false;
    const regex = /^\d+$/;
    if (s.length === 4 || s.length === 6) {
        answer = regex.test(s) ? true : false;    
    } else answer;

    return answer;
}