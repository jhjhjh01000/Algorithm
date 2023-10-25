function solution(my_string, overwrite_string, s) {
    const array = my_string.split(''); 
    
    for (let i = 0; i < overwrite_string.length; i++) {
        array[s] = overwrite_string[i]; 
        s++;
    }
    
    const answer = array.join('');
    
    return answer;
}