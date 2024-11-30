function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPerIncrement = 5;
    const maxPoints = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPerIncrement);
        if (demeritPoints > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage
const speed = parseInt(prompt("Enter the speed of the car: "), 10);
if (!isNaN(speed)) {
    checkSpeed(speed);
} else {
    console.log("Please enter a valid number.");
}
