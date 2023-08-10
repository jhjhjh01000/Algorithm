function solution(s, n) {
    let answer = '';
    
    const arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    s = s.split('');
    
    s.forEach(el => {
        if (el === ' ') {
            answer += ' ';
        } else if (el === el.toLowerCase()) {
            answer += arr[(arr.indexOf(el) + n) % 26].toLowerCase();
        } else {
            answer += arr[(arr.indexOf(el.toLowerCase()) + n) % 26].toUpperCase();
        }
    })
    
    return answer;
}