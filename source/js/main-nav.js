const TABLET_WIDTH = 768;
const menuButton = document.querySelector(`.main-nav__toggle`);
const menuButtonText = menuButton.querySelector(`span`);
const mainNavWrapper = document.querySelector(`.main-nav__wrapper`);

const buttonClickHandler = () => {
  mainNavWrapper.classList.toggle(`visually-hidden`);

  if (menuButton.classList.contains(`main-nav__toggle--open`)) {
    menuButton.classList.remove(`main-nav__toggle--open`);
    menuButton.classList.add(`main-nav__toggle--close`);
    menuButtonText.textContent = `Закрыть меню`;
  } else {
    menuButton.classList.remove(`main-nav__toggle--close`);
    menuButton.classList.add(`main-nav__toggle--open`);
    menuButtonText.textContent = `Открыть меню`;
  }
}

if (window.innerWidth < TABLET_WIDTH) {
  mainNavWrapper.classList.add(`visually-hidden`);
  menuButton.classList.remove(`visually-hidden`);

  menuButton.addEventListener(`click`, buttonClickHandler);
}
