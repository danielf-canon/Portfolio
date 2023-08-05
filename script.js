/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const hamburger = document.querySelector('.burgerButton');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const x = document.querySelector('.works');
const projects = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    popupImageMobile: 'images/popup-mobile.png',
    popupImageDesktop: 'images/Snapshoot Portfolio.jpg',
    popupTitle: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails',
      'CSS',
      'Javascript',
      'HTML',
    ],
    popupLanguages: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    buttonName: 'See Project',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/danielf-canon/Portfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },

];

for (let i = 0; i < projects.length; i++) {
  const project = document.createElement('article');
  project.classList.add('project');
  x.appendChild(project);

  const image = document.createElement('article');
  image.classList.add('project-img');
  project.appendChild(image);

  const title = document.createElement('h3');
  title.classList.add('project-title');
  title.innerHTML = projects[i].title;
  project.appendChild(title);

  const languages = document.createElement('ul');
  for (let j = 0; j < projects[i].languages.length; j++) {
    const language = document.createElement('li');
    language.innerHTML = projects[i].languages[j];
    languages.appendChild(language);
  }
  project.appendChild(languages);

  const button = document.createElement('button');
  button.setAttribute('id', 'project-button');
  button.classList.add('button');
  button.innerHTML = projects[i].buttonName;
  project.append(button);
}

function createPopup(index) {
  const project = projects[index];
  const x = document.querySelector('.works');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  x.appendChild(overlay);

  const popupWindow = document.createElement('div');
  popupWindow.setAttribute('id', 'popup-window');
  popupWindow.classList.add('popup-section');

  const popupCloseButton = document.createElement('button');
  popupCloseButton.setAttribute('id', 'close-button');
  popupCloseButton.classList.add('close-button');
  popupCloseButton.innerHTML = '&times';
  popupWindow.appendChild(popupCloseButton);

  const popupImageDesk = document.createElement('img');
  popupImageDesk.setAttribute('src', project.popupImageDesktop);
  popupImageDesk.classList.add('desktop', 'popup-image');
  popupWindow.appendChild(popupImageDesk);

  const popupImageMob = document.createElement('img');
  popupImageMob.setAttribute('src', project.popupImageMobile);
  popupImageMob.classList.add('mobile', 'popup-image');
  popupWindow.appendChild(popupImageMob);

  const popupTitle = document.createElement('h3');
  popupTitle.classList.add('popup-title');
  popupTitle.innerHTML = project.popupTitle;
  popupWindow.appendChild(popupTitle);

  const popupTagsMob = document.createElement('ul');
  popupTagsMob.classList.add('popup-items', 'mobile');
  popupWindow.appendChild(popupTagsMob);

  const popupTagsDesk = document.createElement('ul');
  popupTagsDesk.classList.add('popup-items', 'desktop');
  popupWindow.appendChild(popupTagsDesk);

  for (let j = 0; j < project.languages.length; j += 1) {
    const popupTag = document.createElement('li');
    popupTag.innerHTML = project.languages[j];
    popupTagsMob.appendChild(popupTag);
  }
  for (let j = 0; j < project.popupLanguages.length; j += 1) {
    const popupTag = document.createElement('li');
    popupTag.innerHTML = project.popupLanguages[j];
    popupTagsDesk.appendChild(popupTag);
  }

  const popupDescription = document.createElement('p');
  popupDescription.classList.add('popup-text');
  popupDescription.innerHTML = project.description;
  popupWindow.appendChild(popupDescription);

  const popupButtonsContainer = document.createElement('div');
  popupButtonsContainer.classList.add('popup-buttons');
  popupWindow.appendChild(popupButtonsContainer);

  const popupLiveLink = document.createElement('button');
  popupLiveLink.setAttribute('id', 'popup__live__link__button');
  popupLiveLink.setAttribute('type', 'button');
  popupLiveLink.classList.add('button');
  popupLiveLink.innerHTML = 'See Live';
  popupButtonsContainer.appendChild(popupLiveLink);

  const popupLiveLinkIcon = document.createElement('img');
  popupLiveLinkIcon.setAttribute('src', 'images/see-live-icon.png');
  popupLiveLinkIcon.setAttribute('alt', 'Live Link Icon');
  popupLiveLink.appendChild(popupLiveLinkIcon);

  const popupSourceLink = document.createElement('button');
  popupSourceLink.setAttribute('id', 'popup__source__link__button');
  popupSourceLink.classList.add('button');
  popupSourceLink.innerHTML = 'See Source';
  popupButtonsContainer.appendChild(popupSourceLink);

  const popupSourceLinkIcon = document.createElement('img');
  popupSourceLinkIcon.setAttribute(
    'src',
    'images/See-source.png',
  );
  popupSourceLinkIcon.setAttribute('alt', 'Source Link Icon');
  popupSourceLink.appendChild(popupSourceLinkIcon);

  x.appendChild(popupWindow);

  document.body.appendChild(popupWindow);

  popupCloseButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    popupWindow.style.display = 'none';
  });

  popupLiveLink.addEventListener('click', () => {
    window.open(project.liveLink);
  });

  popupSourceLink.addEventListener('click', () => {
    window.open(project.sourceLink);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const projectButtons = document.querySelectorAll('#project-button');

  for (let i = 0; i < projectButtons.length; i += 1) {
    ((index) => {
      projectButtons[index].addEventListener('click', () => {
        createPopup(index);
      });
    })(i);
  }
});