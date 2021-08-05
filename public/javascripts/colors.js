const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const invColors = [
  '#000000',
  '#de690c',
  '#b350af',
  '#0067ff',
  '#ff6977',
  '#86aab7',
];

const refs = {
  body: document.querySelector('body'),
  changeColorStart: document.querySelector('button[data-action="start"]'),
  changeColorStop: document.querySelector('button[data-action="stop"]'),
  timeoutIdColor: null,
  COLOR_DELAY: 1000,
};

refs.changeColorStart.addEventListener('click', onStartColorChange);
refs.changeColorStop.addEventListener('click', onStopColorChange);

function onStartColorChange() {
  refs.timeoutIdColor = setInterval(() => {
  let randomNumb = Math.round(Math.random() * (colors.length - 1));
  refs.body.style.backgroundColor = `${colors[randomNumb]}`;
  refs.body.style.color = `${invColors[randomNumb]}`; 
  refs.changeColorStart.style.borderColor = `${invColors[randomNumb]}`;
  refs.changeColorStop.style.borderColor = `${invColors[randomNumb]}`;
  }, refs.COLOR_DELAY);

  refs.changeColorStart.disabled = true;
};

function onStopColorChange() {
  clearInterval(refs.timeoutIdColor);

  refs.changeColorStart.disabled = false;
}



console.log("Привіт, світ! Життя брутальне!");

