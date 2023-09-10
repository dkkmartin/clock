const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const box = document.querySelector('.box');
let gridArray = [];

let numreDuSkalBrugeNu = [];

// window.addEventListener('click', (e) => {
//   const dataIndex = e.target.dataset.index;
//   const targetText = e.target.textContent;

//   if (!numreDuSkalBrugeNu.includes(dataIndex)) {
//     // Add the item to the array and change the color
//     numreDuSkalBrugeNu.push(dataIndex);
//     e.target.style.color = 'white';
//   } else if (numreDuSkalBrugeNu.includes(dataIndex)) {
//     // Remove the item from the array and reset the color
//     const indexToRemove = numreDuSkalBrugeNu.indexOf(dataIndex);
//     numreDuSkalBrugeNu.splice(indexToRemove, 1);
//     e.target.style.color = 'inherit';
//   } else if (numreDuSkalBrugeNu.includes(targetText)) {
//     // Check if the target text is in the array and remove it
//     const indexToRemove = numreDuSkalBrugeNu.indexOf(targetText);
//     numreDuSkalBrugeNu.splice(indexToRemove, 1);
//     e.target.style.color = 'inherit';
//   }

//   console.log(numreDuSkalBrugeNu);
// });

function fillArrayWithArrays() {
  for (let i = 0; i < 76; i++) {
    gridArray.push([]);
  }
}

fillArrayWithArrays();
gridArrayFiller();
arrayToScreen();
gridPosColorHandler();

function randomChar() {
  const randomInt = Math.floor(Math.random() * chars.length);
  return chars[randomInt];
}

function gridArrayFiller() {
  gridArray.forEach((array) => {
    for (let i = 0; i < 182; i++) {
      array.push(randomChar());
    }
  });
}

function arrayToScreen() {
  gridArray.forEach((array, index) => {
    for (let i = 0; i < array.length; i++) {
      const newSpan = document.createElement('span');
      newSpan.dataset.index = `${i}`;
      newSpan.dataset.array = `${index}`;
      newSpan.textContent = array[i];
      box.appendChild(newSpan);
    }
  });
}

function gridPosColorHandler() {
  const numberPosArray = [
    [
      [20, 5],
      [20, 6],
      [20, 7],
      [20, 8],
      [21, 5],
      [22, 5],
      [23, 5],
    ]
  ];

  numberPosArray[0].forEach((pos) => {
    const [arrayValue, indexValue] = pos;
    let element = document.querySelector(
      `[data-index="${indexValue}"][data-array="${arrayValue}"]`
    );
    element.textContent = 1;
    element.style.color = 'white';
  });
  
}

function playSound() {
  const sound = new Audio('/assets/tick.mp3');
  sound.play();
}

function clock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  clockDiv.textContent = timeString;
}

function intervalHandler() {
  const updateGridInterval = setInterval(() => {
    gridHandler();
    gridPrinter();
    gridPosColorHandler();
    clock();
  }, 1000);

  const soundInterval = setInterval(() => {
    playSound();
  }, 2000);
}
//gridHandler();
//gridPrinter();
//gridPosColorHandler();
//playSound();
//clock();
//intervalHandler();
