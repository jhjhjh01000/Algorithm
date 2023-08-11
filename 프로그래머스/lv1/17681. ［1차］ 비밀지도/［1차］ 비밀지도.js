function solution(n, arr1, arr2) {
    let answer = [];
    const copyArr1 = [];
    const copyArr2 = [];
    
    for (let i = 0; i < n; i++) {
        const row = [];
        const binArr1 = arr1[i].toString(2).padStart(n, '0');
        const binArr2 = arr2[i].toString(2).padStart(n, '0');
        
        for (let j = 0; j < n; j++) {
            if (binArr1[j] === '1' || binArr2[j] === '1') {
                row.push('#');
            } else {
                row.push(' ');
            }
        }
        
        answer.push(row.join(''));
    }
    
    
    
    return answer;
}