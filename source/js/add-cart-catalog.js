const MOBILE_MAX_WIDTH = 767;

const orderHandler = () => {
  if (window.innerWidth > MOBILE_MAX_WIDTH) {
    return;
  }

  const popup = document.querySelector(`.add-cart`);
  popup.classList.remove(`visually-hidden`);

  const body = document.querySelector(`body`);
  body.classList.add(`scroll-hidden`);

  const sendButton = document.querySelector(`.add-cart__button`);
  const sendToCart = (evt) => {
    evt.preventDefault();

    body.classList.remove(`scroll-hidden`);
    popup.classList.add(`visually-hidden`);

    sendButton.removeEventListener(`click`, sendToCart);
  };

  sendButton.addEventListener(`click`, sendToCart);
};

const addButtons = document.querySelectorAll(`.product-card__add`);
for (let button of addButtons) {
  button.addEventListener(`click`, orderHandler);
};
