function solution(age) {
    var answer = '';
    let ageArray = age.toString().split('');
        
    let objectAge = {
        0 : 'a',
        1 : 'b',
        2 : 'c',
        3 : 'd',
        4 : 'e',
        5 : 'f',
        6 : 'g',
        7 : 'h',
        8 : 'i',
        9 : 'j'
    }
    for (let i = 0; i < ageArray.length; i++) {
        answer += objectAge[ageArray[i]]
    }
    return answer;
}