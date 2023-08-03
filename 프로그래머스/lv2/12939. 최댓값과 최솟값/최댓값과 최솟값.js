function solution(s) {
    let answer = [];
    s.split(' ').forEach((el) => answer.push(Number(el)));
    console.log(answer)
    const min = Math.min(...answer);
    const max = Math.max(...answer);
    return `${min} ${max}`;
}