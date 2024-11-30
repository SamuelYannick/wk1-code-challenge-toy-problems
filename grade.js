function getStudentGrade() {
    let marks;
    
    // Loop until the input is valid
    while (true) {
        marks = prompt("Enter student marks (0-100):");

        // Convert the input to a number
        marks = Number(marks);

        // Validate input
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            break; // Exit the loop if the input is valid
        }

        alert("Invalid input. Please enter a number between 0 and 100.");
    }

    // Determine the grade
    let grade;
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

    // Display the result
    alert(`The grade is: ${grade}`);
}

// Call the function to run it
getStudentGrade();
