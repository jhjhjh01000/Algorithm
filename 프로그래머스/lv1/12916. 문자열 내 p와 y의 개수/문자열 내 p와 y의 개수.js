function solution(s){
    var answer = true;
    s = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    
    for (let i of s) {
        i.includes("p") ? countP++ : countP += 0;
    }
    for (let i of s) {
        i.includes("y") ? countY++ : countY += 0;
    }
    countP + countY === 0 || countP === countY ? answer = true : answer = false;
    
    return answer;
}