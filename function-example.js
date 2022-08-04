function assignmentAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 54;
const assignment3Marks = 60;

const result = assignmentAverage(assignment1Marks, assignment2Marks, assignment3Marks);

// console.log(result);

// assignment marks average with array and loop
const assignmentMarks = [60, 54, 60, 60];

// console.log(assignmentMarks[assignmentMarks.length - 1]);

let totalMarks = 0;

function averageMark(arr) {
    for (let i = 0; i < arr.length; i++){
        const signleMark = arr[i];
        // console.log(signleMark);
        totalMarks += signleMark;
    }
    let average = totalMarks / arr.length;
    return average;
}

let assignmentResult = averageMark(assignmentMarks);
console.log(parseFloat(assignmentResult.toFixed(2)));
let resultInTwoDecimals = parseFloat(assignmentResult.toFixed(2));

console.log('Your assignment average score is: ', resultInTwoDecimals);

// how many assignment have you submitted?

function assignmentSubmitted(assignments) {
    let assignmentLength = assignmentMarks.length;
    return assignmentLength;
}
// result
const submitted = assignmentSubmitted(assignmentMarks);
console.log("Assignment you have submitted: ", submitted);