function solution(x) {
    let str = x.toString().split('');
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
         
        sum += parseInt(str[i]);
    }

    return x % sum === 0 ? true : false;
}