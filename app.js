const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const box = document.querySelector('.box');
const clockDiv = document.querySelector('.clock');
let charArray;

function randomChar() {
  const randomInt = Math.floor(Math.random() * chars.length);
  return chars[randomInt];
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomCharPicker() {
  const displayedText = box.textContent;
  const randomCharValue = randomChar();

  if (displayedText.includes(randomCharValue)) {
    const regex = new RegExp(randomCharValue, 'g');
    const coloredText = displayedText.replace(regex, `<span style="color: ${randomColor()}">${randomCharValue}</span>`);
    box.innerHTML = coloredText;
  }
}

function playSound() {
  const sound = new Audio('/assets/tick.mp3');
  sound.play();
}

function printLetters() {
  charArray = [];
  for (let i = 0; i < 10000; i++) {
    charArray.push(randomChar());
  }
  box.innerHTML = charArray.join('');
}

function clock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  clockDiv.textContent = timeString;
}

function intervalHandler(time) {
  const randomCharPickerInterval = setInterval(() => {
    randomCharPicker()
  }, 100)

  const letterInterval = setInterval(() => {
    printLetters();
  }, time);

  const soundInterval = setInterval(() => {
    playSound();
  }, 2000);

  const clockInterval = setInterval(() => {
    clock();
  }, 1000);

  const charPickerInterval = setInterval(() => {
    randomCharPicker();
  }, time);
}

playSound();
printLetters();
clock();
randomCharPicker();
intervalHandler(1000);
