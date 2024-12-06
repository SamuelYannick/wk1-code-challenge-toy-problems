const readLine = require('readline-sync');
let marks, grade;

function gradeCalculator() {
    while (true) {
        marks = readLine.question("Enter marks between 0 and 100:");
        if(!isNaN(marks) && marks >= 0 && marks <= 100) {
            break; //Exit the loop when the input is valid
        } else {
            console.log("Invalid input! Please enter a number between 0 and 100");
        }
    }
    
    //Finally, determining the grade
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(`The grade is: ${grade}`);
}

gradeCalculator();
