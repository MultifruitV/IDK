let themeButton = document.querySelector('.theme-button');
let page = document.querySelector('.body');

themeButton.onclick = function () {
  page.classList.toggle('body-light');
  page.classList.toggle('body-dark');
}