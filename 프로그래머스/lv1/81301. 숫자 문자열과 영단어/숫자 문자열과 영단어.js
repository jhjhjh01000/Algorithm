function solution(s) {
    let answer = 0;
    
    const obj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    
    for (let i of Object.keys(obj)) {
        while (s.includes(i)) {
            s = s.replace(i, obj[i])   
            
        }
    }
        answer = parseInt(s);
    
    return answer;
}