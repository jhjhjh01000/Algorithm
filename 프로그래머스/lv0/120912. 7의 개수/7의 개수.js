function solution(array) {
    let arr = array.join('').split('');

    return arr.filter((el) => parseInt(el) === 7).length;
}