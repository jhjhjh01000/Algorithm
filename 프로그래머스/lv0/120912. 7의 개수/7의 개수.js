function solution(array) {
    let answer = 0;
    let arr = array.join('').split('');

    return arr.filter((el) => parseInt(el) === 7).length;
}