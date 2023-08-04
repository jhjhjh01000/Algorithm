function solution(s) {
    s = s.toLowerCase().split(' ');
    for (let i = 0; i < s.length; i++) {
        if (0 < s[i].length) {
            s[i] = s[i][0].toUpperCase() + s[i].slice(1);
        }
    }
    return s.join(' ');
}