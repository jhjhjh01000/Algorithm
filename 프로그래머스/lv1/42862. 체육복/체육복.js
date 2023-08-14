function solution(n, lost, reserve) {
    let answer = n - lost.length;
    lost = lost.sort((a,b) => a - b);
    reserve = reserve.sort((a,b) => a - b);
    
    for (let i = 0; i < reserve.length; i++) {
        if (lost.includes(reserve[i])) {
            lost.splice(lost.indexOf(reserve[i]), 1);
            reserve.splice(i, 1);
            i--;
            answer++;
        }
    }
    
    for (let i = 0; i < reserve.length; i++) {
        if (lost.includes(reserve[i] - 1)) {
            lost.splice(lost.indexOf(reserve[i] - 1), 1);
            answer++;
        } else if (lost.includes(reserve[i] + 1)) {
            lost.splice(lost.indexOf(reserve[i] + 1), 1);
            answer++;
        }
    }
    
    
    return answer;
}