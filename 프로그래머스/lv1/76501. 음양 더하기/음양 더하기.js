function solution(absolutes, signs) {
    let answer = 0;
    let arrForAnswer = [];
    
    for (let i = 0; i < signs.length; i++) {
        signs[i] === false ? 
            arrForAnswer.push((absolutes[i]) * -1) : 
        arrForAnswer.push((absolutes[i]));
    }
    
    arrForAnswer.forEach((el) => answer += el);
    return answer;     
}