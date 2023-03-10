// #region Mobile Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('menu-links')[0];
const dimBackground = document.getElementsByClassName('dim-background')[0];
const exitMobileButton = document.getElementsByClassName('exit-mobile-menu')[0];
const menuTabs = document.getElementsByClassName('menutabs');

const toggleActiveClass = () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
};

toggleButton.addEventListener('click', toggleActiveClass);
exitMobileButton.addEventListener('click', toggleActiveClass);
for (let i = 0; i < menuTabs.length; i += 1) {
  menuTabs[i].addEventListener('click', toggleActiveClass);
}
// #endregion

// #region projects data
const projectsList = [
  {
    name: 'My First Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    livelink: 'https://www.google.com/',
    sourcelink: '#',
  },
  {
    name: 'My Second Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Third Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fourth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fifth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Sixth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
];
// #endregion

// #region Modal Pop Up
const modalPopUp = document.getElementsByClassName('modalcontainer')[0];
const overlayBg = document.getElementById('overlay');
const liveL = document.getElementById('see-live');
const sourceL = document.getElementById('see-source');
let currentScrollPosition = window.scrollY;

function ShowModal(index) {
  // Declare Variables
  const project = projectsList[index];
  currentScrollPosition = window.scrollY;

  // toggle pop up activation
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');

  // scroll all the way to the pop up
  window.scrollTo(0, 0);

  modalPopUp.querySelector('h3').textContent = project.name;
  modalPopUp.querySelector('p').textContent = project.description;
  liveL.setAttribute('onclick', `window.location.href='${project.livelink}'`);
  sourceL.setAttribute('onclick', `window.location.href='${project.sourcelink}'`);

  const tags = modalPopUp.querySelectorAll('.tag');
  for (let i = 0; i < tags.length; i += 1) {
    tags[i].textContent = project.technologies[i];
  }
}
// #endregion

// Get the project card template from the DOM
const projectCardTemplate = document.getElementById('cardtemplate');

// Get the container where the project cards will be inserted
const projectsContainer = document.querySelector('.works');

// Loop through the projectsList array and generate the HTML for each project
for (let i = 0; i < projectsList.length; i += 1) {
  // Clone the project card template
  const projectCard = projectCardTemplate.content.cloneNode(true);

  // Fill in the details for the project
  const project = projectsList[i];
  projectCard.querySelector('h3').textContent = project.name;
  projectCard.querySelector('.button').textContent = 'See Project';
  projectCard.querySelector('.button').addEventListener('click', () => {
    ShowModal(i);
  });
  projectCard.querySelectorAll('.tag').forEach((tag, index) => {
    tag.textContent = project.technologies[index];
  });
  // Insert the project card into the projects container
  projectsContainer.appendChild(projectCard);
}

function HideModal() { // eslint-disable-line no-unused-vars
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');
  window.scrollTo(0, currentScrollPosition);
}

// #region
const form = document.getElementsByClassName('contact-form')[0];
const emailField = document.getElementById('email');
const setError = (message) => {
  const errorContainer = form.querySelector('.error');
  errorContainer.innerHTML = message;
  errorContainer.classList.add('error');
};

const validateInputs = () => {
  const emailSubmission = emailField.value;

  if (!(emailSubmission === emailSubmission.toLowerCase())) {
    setError('Your email needs to be lowercase');
    emailField.classList.toggle('activeerror');
  } else if (emailSubmission === '') {
    setError('Your email can not be empty');
    emailField.classList.toggle('activeerror');
  } else {
    setError('');
    emailField.classList.toggle('activeerror');
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
// #endregion

// Get All input fields and text area in the doc
const contactForm = document.querySelector('.contact-form');
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const commentsInput = contactForm.querySelector('#comments');

// Define the formData object
const formData = {
  name: nameInput.value,
  email: emailInput.value,
  comments: commentsInput.value,
};

// Add an input event listener to each input element
[nameInput, emailInput, commentsInput].forEach((input) => {
  input.addEventListener('input', () => {
    // Update the formData object with the new input value
    formData[input.name] = input.value;
    // Save the updated formData object to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
  // Load the saved formData object from local storage
  const savedFormData = JSON.parse(localStorage.getItem('formData'));
  // If savedFormData exists, fill the form with the saved data
  if (savedFormData) {
    nameInput.value = savedFormData.name;
    emailInput.value = savedFormData.email;
    commentsInput.value = savedFormData.body;
  }
});