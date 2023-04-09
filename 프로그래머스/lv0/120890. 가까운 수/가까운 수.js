function solution(array, n) {
    var answer = 0;
    let arr = [];
    let coppyArr = [];
    array.sort((a,b)=> a-b)
    for (let i = 0; i < array.length; i++) {
        let num = n - array[i];
        num = num < 0 ? num * -1 : num;
        arr.push(num);
        coppyArr = [...arr]
        coppyArr.sort((a,b) => a-b)
        console.log(array[arr.indexOf(coppyArr[0])])
        answer = array[arr.indexOf(coppyArr[0])]
        
    }

    
    return answer;
}