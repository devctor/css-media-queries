import './css/reset.css';
import './css/style.css';

import './src/index.js';

const navBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('toggle-nav')
})
