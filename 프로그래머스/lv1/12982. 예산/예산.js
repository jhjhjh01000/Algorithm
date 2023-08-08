function solution(d, budget) {
    let answer = 0;
    
    d = d.sort((a,b) => a - b);
    
    d.reduce((acc,cur) => {
        if ((acc + cur) <= budget) {
            answer++;
            return acc + cur;
        }
    },0)
    

    return answer;
}