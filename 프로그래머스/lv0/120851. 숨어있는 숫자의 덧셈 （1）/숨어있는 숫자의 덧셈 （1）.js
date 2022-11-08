function solution(my_string) {
    let n = 0;
    var answer = my_string.split('');
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] % 1 === 0) {
          n += Math.floor(answer[i]);
        }
    
    }
    return n;
}
