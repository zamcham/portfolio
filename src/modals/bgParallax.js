const background1 = document.getElementById('bg1');
const background2 = document.getElementById('bg2');
const background3 = document.getElementById('bg3');
const background4 = document.getElementById('bg4');
const background5 = document.getElementById('bg5');
const decoBox1 = document.getElementById('decobox');



let latestKnownScrollY = 0;
let ticking = false;

export  const bgParallax = () => {
  const value = latestKnownScrollY;
  background1.style.top = `${value * 0.9}px`;
  background2.style.top = `${value * 0.8}px`;
  background3.style.top = `${value * 0.6}px`;
  background4.style.top = `${value * 0.4}px`;
  background5.style.top = `${value * 0.5}px`;
  decoBox1.style.top = `${(value/-20) * 2}px`;
  ticking = false;
};

window.addEventListener('scroll', () => {
  latestKnownScrollY = window.scrollY;
  console.log(window.scrollY);
  if (!ticking) {
    window.requestAnimationFrame(bgParallax);
    ticking = true;
  }
});