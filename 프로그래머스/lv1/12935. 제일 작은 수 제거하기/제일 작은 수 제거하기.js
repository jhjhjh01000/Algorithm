function solution(arr) {
    let answer = [];
    const copyArr = [...arr].sort((a,b) => a - b);
    answer = arr.length < 2 ? [-1] : arr.filter((el) => el !== copyArr[0]);
    
    return answer;
}