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

export const startAnimations = () => {
  addIntersectionObserver(fadeElements, 'show');
  addIntersectionObserver(popElements, 'pop-active');
};
