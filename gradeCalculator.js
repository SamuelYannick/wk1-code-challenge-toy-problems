let marks, grade;
let validInput = false;

function gradeCalculator() {
    while (true) {
        marks = prompt("Enter marks between 0 and 100:");
        if(!isNaN(marks) && marks >= 0 && marks <= 100) {
            break; //Exit the lopp if the input is valid
        } else {
            alert("Invalid input! Please enter a number between 0 and 100");
        }
    }
    
    //Determine the grade
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

    alert(`The grade is: ${grade}`);
}

gradeCalculator();
