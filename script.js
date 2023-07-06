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
/*
const projects = [
  {
    id: '1',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',

    image: 'images/Snapshoot Portfolio.jpg',
    titlePopup: 'Keeping track of hundreds of components',
    languagesPopup: ['HTML', 'CSS', 'Javascript'],
    // eslint-disable-next-line max-len
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://www.example.com/',
    sourceLink: '',
  },

  {
    id: '2',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project',
  },

  {
    id: '3',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project'
  },

  {
    id: '4',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project'
  },

  {
    id: '5',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project'
  },

  {
    id: '6',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    buttonName: 'See Project'
  },
];

let cards = document.querySelector('.works');

projects.forEach((project)=>{
  let div = document.createElement('.project');
  let img = document.createElement('.project-img');
  let title = document.createElement('.project-title');
  let languages = document.createElement('ul');
  let buttonName = document.createElement('.button');
}

*/
