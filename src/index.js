import _ from 'lodash';
import './style.css';
import '../src/Images/favicon.png';
import createNavBar from './navbar.js';
import createHomePage from './homepage.js';
import createMenu from './menu.js';
import contactUs from './contact.js';
import createFooter from './footer.js';

createNavBar();
createHomePage();
createMenu();
contactUs();
createFooter();

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');
  });
});

const menuBtn = document.querySelector('.menu-button');
const menu = document.getElementById('menu');

function showMenu() {
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });
  menu.classList.add('active');
}

menuBtn.addEventListener('click', showMenu);
