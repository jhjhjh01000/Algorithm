function solution(dot) {
    var answer = 0;
    if (0 < dot[0] && dot[1] > 0) {
        answer = 1;
    } else if (0 > dot[0] && dot[1] > 0) {
        answer = 2;
    } else if (0 > dot[0] && dot[1] < 0) {
        answer = 3;
    } else 
        answer = 4;
    
    return answer;
}