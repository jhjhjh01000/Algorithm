function solution(s) {
    let answer = '';
    s = s.toLowerCase().split(' ');

    answer = s.map((word) => {
        return word.split('').map((char,idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    }).join(' ')
    
    return answer;
}