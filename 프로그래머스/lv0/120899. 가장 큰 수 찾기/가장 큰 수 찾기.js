function solution(array) {
    var answer = [];
    let temp = [...array];
    temp.sort(function(a, b) {
        return a - b;
    });
    let index = temp.slice(-1)[0];
    answer.push(index);
    answer.push(array.indexOf(index));
    
    return answer;
}