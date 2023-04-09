function solution(emergency) {
    let answer = [];
    let coppyArr = [...emergency]
    coppyArr.sort((a,b)=> b-a)
    for (let i = 0; i < coppyArr.length; i++) {
        // console.log(coppyArr[i])
        answer.push(coppyArr.indexOf(emergency[i]) + 1)
    }
    
    return answer;
}