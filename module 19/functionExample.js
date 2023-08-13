/* function name(params) {
    
} */

function getAvg(assignment1, assignment2, assignment3) {
    const total= assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}
const assignment1= 60;
const assignment2= 58;
const assignment3=60
var assignmentNumber =getAvg(assignment1, assignment2, assignment3);
console.log('avg mark:', assignmentNumber);