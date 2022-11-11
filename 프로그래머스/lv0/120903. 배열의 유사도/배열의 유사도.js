function solution(s1, s2) {
    var answer = 0;
    for (let i in s1) {
        for (let j in s2) {
            (s1[i] === s2[j]) ? answer++ : 0;
        }
    }
    return answer;
}