const airplane = document.querySelector('.airplane');
const man = document.querySelector('.man');

let active = false;
let count = 0;
let idInterval;

const flyAnimate = () => {
  count++;

  idInterval = requestAnimationFrame(flyAnimate);

  if (count < 290) {
    man.style.top = count + 'px';
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
