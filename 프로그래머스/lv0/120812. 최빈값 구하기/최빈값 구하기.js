function solution(array) {
    let answer = 0;
    let count = 1;
    let maxCount = 1;
    
    array.sort((a,b) => a - b);
    if (array.length === 1) {
            answer = array[0];
        }
    for (let i = 1; i < array.length; i++) {
        
        if (array[i] === array[i - 1]) {
           count++;
        } else {
           count = 1;       
        }
        if (count > maxCount) {
            maxCount = count;
            answer = array[i];
        } else if (count === maxCount) {
            answer = -1;
        }
    }
    
    return answer;
}