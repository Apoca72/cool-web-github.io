// Assignment 1: Palindrome Checker
function isPalindrome(num) {
    const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const reversedSum = sum.toString().split('').reverse().join('');
    return sum.toString() === reversedSum;
}

function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    if (input) {
        const result = isPalindrome(parseInt(input));
        document.getElementById('palindromeResult').textContent = 
            `The sum of the digits is ${result ? '' : 'not '}a palindrome.`;
    } else {
        document.getElementById('palindromeResult').textContent = 'Please enter a valid number.';
    }
}

// Assignment 2: Catch-Up Time
function catchUpTime(initialDistance) {
    const wolfSpeed = 25; // km/h
    const rabbitSpeed = 18; // km/h
    const relativeSpeed = wolfSpeed - rabbitSpeed; // km/h

    const timeInHours = initialDistance / relativeSpeed;
    return timeInHours * 60; // convert hours to minutes
}

function calculateCatchUpTime() {
    const input = document.getElementById('distanceInput').value;
    if (input) {
        const result = catchUpTime(parseFloat(input)).toFixed(2);
        document.getElementById('catchUpResult').textContent = 
            `The wolf will catch up to the rabbit in approximately ${result} minutes.`;
    } else {
        document.getElementById('catchUpResult').textContent = 'Please enter a valid distance.';
    }
}
// Assignment 3: Door Finder
function findLocation(doorNumber) {
    const floors = 9;
    const entrances = 3;
    const doorsPerFloor = 4;

    const doorsPerEntrance = floors * doorsPerFloor;

    const entrance = Math.ceil(doorNumber / doorsPerEntrance);
    const doorWithinEntrance = doorNumber - (entrance - 1) * doorsPerEntrance;
    const floor = Math.ceil(doorWithinEntrance / doorsPerFloor);
    const doorOnFloor = ((doorWithinEntrance - 1) % doorsPerFloor) + 1;

    return { entrance, floor, doorOnFloor };
}

function findDoorLocation() {
    const input = document.getElementById('doorInput').value;
    if (input && input > 0) {
        const location = findLocation(parseInt(input));
        document.getElementById('doorResult').textContent =
            `Entrance: ${location.entrance}, Floor: ${location.floor}, Door: ${location.doorOnFloor}`;
    } else {
        document.getElementById('doorResult').textContent = 'Please enter a valid door number.';
    }
}

// Assignment 4: GCD of Numbers
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdOfArray(arr) {
    return arr.reduce((acc, num) => gcd(acc, num));
}

function calculateGCD() {
    const input = document.getElementById('gcdInput').value;
    const numbers = input.split(" ").map(Number);
    if (numbers.length === 5 && numbers.every(num => !isNaN(num))) {
        const result = gcdOfArray(numbers);
        document.getElementById('gcdResult').textContent = `GCD: ${result}`;
    } else {
        document.getElementById('gcdResult').textContent = 'Please enter exactly 5 valid numbers.';
    }
}

// Assignment 5: Number Calculation Based on Time
function calculateBasedOnTime(inputNumber) {
    const currentHour = new Date().getHours();
    return currentHour < 12 ? Math.pow(inputNumber, 2) : Math.sqrt(inputNumber);
}

function calculateByTime() {
    const input = document.getElementById('timeInput').value;
    if (input && input > 0) {
        const result = calculateBasedOnTime(parseFloat(input)).toFixed(2);
        document.getElementById('timeResult').textContent = `Result: ${result}`;
    } else {
        document.getElementById('timeResult').textContent = 'Please enter a valid number.';
    }
}
