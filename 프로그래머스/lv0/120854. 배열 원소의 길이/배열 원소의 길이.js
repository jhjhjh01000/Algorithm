function solution(strlist) {
    var answer = [];
    for (let i = 0; i < strlist.length; i++) {
        const result = strlist[i].length;
        answer = answer.concat(result); 
    }
    return answer;
}