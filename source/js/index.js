const menuButton = document.querySelector(`.main-nav__toggle`);
const menuButtonText = menuButton.querySelector(`span`);
const mainNavWrapper = document.querySelector(`.main-nav__wrapper`);

// mainNavWrapper.classList.add(`visually-hidden`);
menuButton.classList.remove(`visually-hidden`);

buttonClickHandler = () => {
  mainNavWrapper.classList.toggle(`visually-hidden`);
  // mainNavWrapper.removeProperty('.visually-hidden');

  if (menuButton.classList.contains(`main-nav__toggle--open`)) {
    menuButton.classList.remove(`main-nav__toggle--open`);
    menuButton.classList.add(`main-nav__toggle--close`);
    menuButtonText.textContent = `Закрыть меню`;
    // mainNavWrapper.removeProperty('.visually-hidden');
  } else {
    menuButton.classList.remove(`main-nav__toggle--close`);
    menuButton.classList.add(`main-nav__toggle--open`);
    menuButtonText.textContent = `Открыть меню`;
    // mainNavWrapper.addProperty('.visually-hidden');
  }
}

menuButton.addEventListener(`click`, buttonClickHandler);
