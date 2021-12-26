const airplane = document.getElementById('airplane');
const man = document.getElementById('man');
const reset = document.getElementById('reset');

let active = false;
let count = 0;
let idInterval;

const flyAnimate = () => {
  count++;

  idInterval = requestAnimationFrame(flyAnimate);

  if (count < 290) {
    man.style.top = count + 125 + 'px';
    airplane.style.left = count * 2.4 + 'px';
  } else if (count < 500) {
    airplane.style.left = count * 2.4 + 'px';
  } else {
    cancelAnimationFrame(idInterval);
  }
};


document.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(flyAnimate);
    active = true;
  }
});

reset.addEventListener('click', function (event) {
  event.stopPropagation();
  man.style.top = '125px';
  airplane.style.left = '0';
  count = 0;
});