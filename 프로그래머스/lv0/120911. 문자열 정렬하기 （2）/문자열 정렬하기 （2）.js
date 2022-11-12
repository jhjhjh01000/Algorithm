function solution(my_string) {
    var answer = '';
    let array = my_string.toLowerCase().split('');
    answer = array.sort((a, b) => (a > b) - (a < b)).join('');
    
    return answer
}
