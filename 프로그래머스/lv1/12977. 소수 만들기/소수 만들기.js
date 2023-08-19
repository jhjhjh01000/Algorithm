function solution(nums) {
    let answer = 0;
    let temp = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                temp.push(nums[i] + nums[j] + nums[k]);    
            }
        }    
    }
    
    temp.forEach((el) => {
        let count = 0;
        for (let l = 1; l <= el; l++) {
            if (el % l === 0) count++;
        }
        if (count === 2) answer++;
    })
    
    
    return answer;
}