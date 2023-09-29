import "./main.scss";
import { updateNumber } from "./modals/numbersAnim";
import { bgParallax } from "./modals/bgParallax";
import { startAnimations } from "./modals/scrollAnimations";

updateNumber();
bgParallax();
startAnimations();

const viewProjectButtons = document.querySelectorAll('.view-project-button');
const closeButtons = document.querySelectorAll('.close-modal');
const projectModals = document.querySelectorAll('.project-modal');
const body = document.body;

// Function to show a specific modal by its ID
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show-project-modal');
    body.style.overflow = 'hidden';
}

// Function to hide a specific modal by its ID
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show-project-modal');
    body.style.overflow = 'auto'; // Restore scrolling
}

// Attach event listeners to "View Project" buttons
viewProjectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get the corresponding modal ID from the data-modal-id attribute
        const modalId = button.getAttribute('data-modal-id');
        showModal(modalId);
    });
});

// Attach event listeners to close buttons in modals
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        // Get the modal ID from the button's ID
        const modalId = closeButton.id.replace('close-modal-', '');
        hideModal(modalId);
    });
});
