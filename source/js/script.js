const TABLET_WIDTH = 768;
const MOBILE_MAX_WIDTH = 767;

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


const popup = document.querySelector(`.add-cart`);

const orderButton = document.querySelector(`.featured-product__order`);
const orderHandler = (evt) => {
  if (window.innerWidth > MOBILE_MAX_WIDTH) {
    return;
  }

  evt.preventDefault();
  popup.classList.remove(`visually-hidden`);

  const body = document.querySelector(`body`);
  body.classList.add(`scroll-hidden`);

  const sendButton = popup.querySelector(`.add-cart__button`);
  const sendToCart = (evt) => {
    evt.preventDefault();

    body.classList.remove(`scroll-hidden`);
    popup.classList.add(`visually-hidden`);

    sendButton.removeEventListener(`click`, sendToCart);

  };

  sendButton.addEventListener(`click`, sendToCart);
};

orderButton.addEventListener(`click`, orderHandler);

const sizeButtons = popup.querySelectorAll(`.add-cart__size`);
for (let button of sizeButtons) {
  button.addEventListener(`click`, () => {
    const prevActiveButton = popup.querySelector(`.add-cart__size--active`);
    prevActiveButton.classList.remove(`add-cart__size--active`);
    button.classList.add(`add-cart__size--active`);
  })
}

const addButtons = document.querySelectorAll(`.product-card__add`);
for (let button of addButtons) {
  button.addEventListener(`click`, orderHandler);
};


// Карта
const mapPicture = document.querySelector(`.map picture`);
const mapPin = document.querySelector(`.map__pin`);

mapPicture.classList.add(`visually-hidden`);
mapPin.classList.add(`visually-hidden`);

function initMap() {
  const coordinates = {lat: 59.938856214761074, lng: 30.323036669409305},

  map = new google.maps.Map(document.querySelector('.google-map'), {
      center: coordinates,
      zoom: 15,
      disableDefaultUI: true,
      scrollwheel: false
  });

  image = "../img/contacts/map-pin.svg.svg",
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
});
}
