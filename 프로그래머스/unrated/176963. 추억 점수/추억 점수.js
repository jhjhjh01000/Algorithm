function solution(name, yearning, photo) {
    const answer = [];
    const nameObj = {};
    
    name.forEach((el, idx) => nameObj[el] = yearning[idx]);
    photo.map((names) => {
        let temp = 0;
        for (let i = 0; i < names.length; i++) {
            if (nameObj[names[i]]){
             temp += nameObj[names[i]];
            }
        }
        answer.push(temp)
    })
    
    
    return answer;
}