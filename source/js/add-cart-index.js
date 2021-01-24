const MOBILE_MAX_WIDTH = 767;
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
