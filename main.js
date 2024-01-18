// Завдання 1
let userNumber = prompt("Введіть число:");
powerOfTwo(userNumber);

function powerOfTwo(number) {
  let result = Math.pow(parseFloat(number), 2);
  alert("Квадрат числа " + number + " дорівнює " + result);
}

// Завдання 2
let userNumber1 = prompt("Введіть перше число:");
let userNumber2 = prompt("Введіть друге число:");
calculateAverage(userNumber1, userNumber2);

function calculateAverage(number1, number2) {
  let average = (parseFloat(number1) + parseFloat(number2)) / 2;
  alert("Середнє арифметичне чисел " + number1 + " і " + number2 + " дорівнює " + average);
}

// Завдання 3
let sideLengthSquare = prompt("Введіть довжину сторони квадрата:");
calculateSquareArea(sideLengthSquare);

function calculateSquareArea(sideLength) {
  let squareArea = Math.pow(parseFloat(sideLength), 2);
  alert("Площа квадрата зі стороною " + sideLength + " дорівнює " + squareArea);
}

// Завдання 4
const kilometersToMilesRatio = 0.621371;
let kilometers = prompt("Введіть кількість кілометрів:");
convertKilometersToMiles(kilometers);

function convertKilometersToMiles(kilometers) {
  let miles = parseFloat(kilometers) * kilometersToMilesRatio;
  alert(kilometers + " км дорівнюють " + miles + " миль.");
}

// Завдання 5
let number3 = prompt("Введіть перше число для калькулятора:");
let number4 = prompt("Введіть друге число для калькулятора:");
calculateOperations(number3, number4);

function calculateOperations(num1, num2) {
  let sum = parseFloat(num1) + parseFloat(num2);
  let difference = parseFloat(num1) - parseFloat(num2);
  let product = parseFloat(num1) * parseFloat(num2);
  let quotient = parseFloat(num1) / parseFloat(num2);

  alert("Результати операцій:\n" +
        "Додавання: " + sum + "\n" +
        "Віднімання: " + difference + "\n" +
        "Множення: " + product + "\n" +
        "Ділення: " + quotient);
}

// Завдання 6
let a = prompt("Введіть значення a:");
let b = prompt("Введіть значення b:");
calculateX(a, b);

function calculateX(a, b) {
  if (parseFloat(a) === 0) {
    alert("Значення 'a' повинно бути відмінним від нуля для вирішення рівняння.");
  } else {
    let x = -parseFloat(b) / parseFloat(a);
    alert("Значення x у рівнянні " + a + " * x + " + b + " = 0 дорівнює " + x);
  }
}

// Завдання 7
let currentHour = prompt("Введіть поточний годинник (години):");
let currentMinute = prompt("Введіть поточний годинник (хвилини):");
calculateTimeUntilNextDay(currentHour, currentMinute);

function calculateTimeUntilNextDay(hour, minute) {
  const hoursInDay = 24;
  const minutesInHour = 60;
  let remainingHours = hoursInDay - parseFloat(hour);
  let remainingMinutes = minutesInHour - parseFloat(minute);

  alert("До наступного дня залишилося " + remainingHours + " годин і " + remainingMinutes + " хвилин.");
}

// Завдання 8
let threeDigitNumber = prompt("Введіть тризначне число:");
extractSecondDigit(threeDigitNumber);

function extractSecondDigit(number) {
  let secondDigit = Math.floor((parseFloat(number) / 10) % 10);
  alert("Друга цифра числа " + number + " дорівнює " + secondDigit);
}

// Завдання 9
let fiveDigitNumber = prompt("Введіть п’ятизначне число:");
moveLastDigitToFront(fiveDigitNumber);

function moveLastDigitToFront(number) {
  let lastDigit = number % 10;
  let truncatedNumber = Math.floor(parseFloat(number) / 10);
  let rearrangedNumber = parseFloat(lastDigit.toString() + truncatedNumber.toString());
  alert("Результат переміщення останньої цифри на початок: " + rearrangedNumber);
}

// Завдання 10
let salesAmount = prompt("Введіть загальну суму продажу за місяць:");
calculateSalary(salesAmount);

function calculateSalary(salesAmount) {
  const baseSalary = 250;
  const commissionRate = 0.10;
  let salary = baseSalary + parseFloat(salesAmount) * commissionRate;
  alert("Зарплата працівника становить $" + salary.toFixed(2));
}