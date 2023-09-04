function solution(N, stages) {
    let answer = [];
    let temp = [];
    temp = [...stages].sort((a, b) => a - b);
    
    for (let i = 1; i <= N; i++) {
        const count = stages.filter((el) => el === i).length;
        const failRate = count / temp.length;
        answer.push({stage: i, rate: failRate});
        temp = temp.slice(count);
    }
    
    answer.sort((a, b) => b.rate - a.rate);
    answer = answer.map((obj) => obj.stage);
    
    return answer;
}