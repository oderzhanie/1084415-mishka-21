const menuButton = document.querySelector(`.main-nav__toggle`);
const menuButtonText = menuButton.querySelector(`span`);
const mainNavWrapper = document.querySelector(`.main-nav__wrapper`);

buttonClickHandler = () => {
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

menuButton.addEventListener(`click`, buttonClickHandler);
