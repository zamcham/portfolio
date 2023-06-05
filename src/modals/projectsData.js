function loadProjects() {
    const projects = [
      {
        name: 'Space Traveler',
        description: 'An app created with react/reduct',
        image: require('../assets/SpaceTraveler.png')
      },
      {
        name: 'Wild Vista',
        description: 'A mobile app created with react/reduct and use of APIs',
        image: require('../assets/WildVista.png')
      },
      {
        name: 'Level Up',
        description: 'A website built with html, css and JS',
        image: require('../assets/LevelUp.png')
      }
    ];
  
    // Get the project card template from the DOM
    const projectCardTemplate = document.getElementById('cardtemplate');
  
    // Get the container where the project cards will be inserted
    const projectsContainer = document.querySelector('.projects-container');
  
    // Loop through the projects array and generate the HTML for each project
    for (let i = 0; i < projects.length; i += 1) {
      // Clone the project card template
      const projectCard = projectCardTemplate.content.cloneNode(true);
  
      // Fill in the details for the project
      const project = projects[i];
      projectCard.querySelector('h2').textContent = project.name;
      projectCard.querySelector('h4').textContent = project.description;
      const bgImageClass = `bgi${i}`;
      projectCard.querySelector('.project-bg-image').classList.add(bgImageClass);
      projectCard.querySelector(`.${bgImageClass}`).style.backgroundImage = `url(${project.image})`
      // Insert the project card into the projects container
      projectsContainer.appendChild(projectCard);
    }
}
  
document.addEventListener('DOMContentLoaded', loadProjects);
  