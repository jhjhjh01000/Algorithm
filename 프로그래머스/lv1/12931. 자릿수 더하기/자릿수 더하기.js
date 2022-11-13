function solution(n) {
    var answer = 0;
    let array = n.toString().split('');
    
    for (let i = 0; i < array.length; i++) {
        answer += parseInt(array[i]);
    }

    return answer;
}