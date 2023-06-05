const addIntersectionObserver = (elements, className) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
};

const fadeElements = document.querySelectorAll('.hidden');
const popElements = document.querySelectorAll('.pop-effect');
const movingElements = document.querySelectorAll('.deco-box');

const startAnimations = () => {
  addIntersectionObserver(fadeElements, 'show');
  addIntersectionObserver(popElements, 'pop-active');
  addIntersectionObserver(movingElements, 'moving');

  const moveOnScroll = () => {
    const scrollPosition = window.scrollY;

    movingElements.forEach((element) => {
      const fraction = 0.3; // Adjust the desired fraction of scroll position

      if (element.classList.contains('moving')) {
        const translateY = scrollPosition * fraction;
        element.style.transform = `translateY(${translateY}px)`;
      }
    });
  };

  window.addEventListener('scroll', moveOnScroll);
};

export default startAnimations;
