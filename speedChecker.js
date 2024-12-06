const readLine = require('readline-sync');
const speedLimit = 70, pointsOverLimit = 5, maxPoints = 12;
const speed = parseFloat(readLine.question("Enter speed of the car: "));

if (!isNaN(speed)) {
    speedChecker(speed);
} else {
    console.log("Please enter a valid number.");
}

function speedChecker(speed) {
   if (speed < speedLimit) {
       console.log("OK");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsOverLimit);
    if (demeritPoints > maxPoints) {
        console.log("Your license registration is suspended.");
    } else {
        console.log(`Your points: ${demeritPoints}`);
    }
 }
}

