function solution(s) {
    let answer = '';
    const sortArr = s.split('').sort();
    return sortArr.filter((value,index) => sortArr.indexOf(value) === index && sortArr.lastIndexOf(value) === index).join('');
    
    
    
    return answer;
}