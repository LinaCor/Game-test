//popup
const map = document.querySelector('.container-map');
const popup = document.querySelector('.popup');
const openBtnPopup = map.querySelector('.navigation-rating');
const closeBtnPopup = popup.querySelector('.button-close');

const clickClose = (evt) => {
  if (evt.target.classList.contains('overlay')) {
    popup.style.display = 'none';
    map.classList.remove('overlay');
  }
}

window.addEventListener('click', function (evt) {
  clickClose(evt)
})

openBtnPopup.addEventListener('click', function () {
  popup.style.display = 'block';
  map.classList.add('overlay');
})

closeBtnPopup.addEventListener('click', function (evt) {
  popup.style.display = 'none';
  map.classList.remove('overlay');
})





