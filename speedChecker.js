const speedLimit = 70, pointsOverLimit = 5, maxPoints = 12;

function speedChecker(speed) {
    if (speed < speedLimit) {
        console.log("OK");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsOverLimit);
        if (pointsOverLimit > maxPoints) {
            console.log("Your license registration is suspended");
        } else {
            console.log(`Your points: ${demeritPoints}`);
        }
    }
}

const speed = prompt("Enter speed of the car: ");
if (!isNaN(speed)) {
    checkSpeed(speed);
} else {
    console.log("Please enter a valid number.");
}
