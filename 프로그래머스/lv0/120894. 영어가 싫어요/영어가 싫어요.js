function solution(numbers) {
    let answer = numbers;
   
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
    }
    
    for (let i in obj) {
        answer = answer.split(i).join(obj[i])
    }
    
    return parseInt(answer);
}