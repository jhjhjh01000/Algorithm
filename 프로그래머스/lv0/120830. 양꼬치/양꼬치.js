function solution(n, k) {
    let 양꼬치 = 12000 * n;
    let 음료 = 2000 * k;
    let 서비스음료 = parseInt((n / 10)) * -2000;
    let answer = 양꼬치 + 음료 + 서비스음료;
    
    return answer;
}