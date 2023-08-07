function solution(arr) {
    
    return arr.filter((value, idx, arr) => value !== arr[idx - 1]);
}