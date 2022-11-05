function solution(num_list) {
    var answer = [0,0];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even++
            answer[0] = even;
            
        } else {
            odd++
            answer[1] = odd;
        }
    }
    return answer;
}