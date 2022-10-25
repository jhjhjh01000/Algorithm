function solution(denum1, num1, denum2, num2) {
    let denum = (denum1 * num2) + (denum2 * num1); //분자
    let num = num1 * num2; //분모
    for (let i = 1; i <= denum; i++) {
        if (denum % i === 0 && num % i === 0) {
            j =+ i
        }
    }
    return [denum / j, num / j];
}