function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {  
        let 약수 = 0;
        for (let j = 1; j <= i; j++) { 
            if (i % j === 0) { 
                약수++;
            }
        }
        if (약수 >= 3) { 
                answer++;
        }
    }
    return answer;
}