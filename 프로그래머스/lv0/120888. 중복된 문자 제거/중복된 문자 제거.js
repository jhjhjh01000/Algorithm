function solution(my_string) {
    var answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (i === my_string.indexOf(my_string.charAt(i))) {
            answer += my_string.charAt(i);
        }
    }
    return answer;
}