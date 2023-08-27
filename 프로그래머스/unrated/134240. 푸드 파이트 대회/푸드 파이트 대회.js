function solution(food) {
    const answer = [];
    let reverse = [];
    
    for (let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer.push(i)
        }
    }
    
    reverse = [...answer].reverse().join('');
    answer.push(0);
    answer.push(reverse)
    
    return answer.join('');
}