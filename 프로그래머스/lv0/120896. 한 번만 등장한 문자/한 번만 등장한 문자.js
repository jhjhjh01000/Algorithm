function solution(s) {
    const sortArr = s.split('').sort();
    return sortArr.filter((value,index) => sortArr.indexOf(value) === index && sortArr.lastIndexOf(value) === index).join('');
    
    
    
    
}