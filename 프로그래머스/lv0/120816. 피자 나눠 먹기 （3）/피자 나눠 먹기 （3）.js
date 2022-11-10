function solution(slice, n) {
    return (n % slice !== 0) ? Math.ceil(n / slice) : Math.floor(n / slice);
}