const MOBILE_MAX_WIDTH = 767;

const orderButton = document.querySelector(`.featured-product__order`);
const orderHandler = (evt) => {
  if (window.innerWidth > MOBILE_MAX_WIDTH) {
    return;
  }

  evt.preventDefault();

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

orderButton.addEventListener(`click`, orderHandler);
