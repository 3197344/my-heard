const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const text = document.querySelector('h1')

let intervalID = null;


btnStart.addEventListener('click', changesBackgroundColor );
btnStop.addEventListener('click', stopChangesBackgroundColorOfBody);


function changesBackgroundColor() {
  
    intervalID = setInterval(() => {
      text.style.color = `${getRandomHexColor()}`;
    
    }, 1000);
  btnStart.disabled = true;
  
}

function stopChangesBackgroundColorOfBody() {
  clearInterval(intervalID);
  console.log('хватит', btnStop); 
  btnStart.disabled = false;
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// text.style.color = `${getRandomHexColor()}`;
