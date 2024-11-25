﻿// Assignment 1
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

// Assignment 2
function catchUpTime(initialDistance) {
    const wolfSpeed = 25; 
    const rabbitSpeed = 18; 
    const relativeSpeed = wolfSpeed - rabbitSpeed; 

    const timeInHours = initialDistance / relativeSpeed;
    return timeInHours * 60; 
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
// Assignment 3
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

// Assignment 4
// Function to calculate GCD (used in LCM calculation)
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM of two numbers
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Function to calculate LCM of an array of numbers
function lcmOfArray(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), 1); // Start with 1 as the initial value
}

// Function to calculate and display LCM
function calculateLCM() {
    const input = document.getElementById('lcmInput').value;
    const numbers = input.split(" ").map(Number);
    
    // Ensure exactly 5 valid numbers are entered
    if (numbers.length === 5 && numbers.every(num => !isNaN(num))) {
        const result = lcmOfArray(numbers);
        document.getElementById('lcmResult').textContent = `LCM: ${result}`;
        document.getElementById('lcmError').textContent = ""; // Clear any error message
    } else {
        document.getElementById('lcmResult').textContent = ""; // Clear result
        document.getElementById('lcmError').textContent = 'Please enter exactly 5 valid numbers.';
    }
}



// Assignment 5
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
