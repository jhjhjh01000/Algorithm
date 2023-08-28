function solution(a, b, n) {
    if (n < a) {
        return 0;  
    }

    const newBottles = Math.floor(n / a) * b;
    const remainingBottles = n % a;        

    return newBottles + solution(a, b, newBottles + remainingBottles);
}