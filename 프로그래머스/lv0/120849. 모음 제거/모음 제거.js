function solution(my_string) {
    var answer = '';
    let array = my_string.split('');
    let vowel = ['a', 'e', 'i', 'o', 'u']
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            (array[i] !== vowel[j]) ? array[i] : array[i] = '';
        }
        answer += array[i];
    }
             
    return answer;
}