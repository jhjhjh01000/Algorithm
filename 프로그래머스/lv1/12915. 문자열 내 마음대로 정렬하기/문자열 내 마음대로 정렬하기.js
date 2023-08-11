function solution(strings, n) {
    strings = strings.sort();
    
    return strings.sort((a, b) => {
        if (a.charAt(n) > b.charAt(n)) return 1;
        if (a.charAt(n) < b.charAt(n)) return -1;
        return 0;
    });
    
    
}
