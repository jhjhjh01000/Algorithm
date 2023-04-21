function solution(my_string) {
    let answer = 0;
    let regex = /\d+/g;
    let regexArr = my_string.match(regex);
    if (my_string.match(regex) === null) {
        answer = 0;
    } else {
        for (let i = 0; i < regexArr.length; i++) {
        answer += parseInt(regexArr[i]);
    }
    }
    
    
    return answer;
}