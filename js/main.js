import { data } from "./data.js";

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
};

window.addEventListener('click', function (evt) {
  clickClose(evt);
});

openBtnPopup.addEventListener('click', function () {
  popup.style.display = 'block';
  map.classList.add('overlay');
});

closeBtnPopup.addEventListener('click', function (evt) {
  popup.style.display = 'none';
  map.classList.remove('overlay');
});
//-----------------------------------------------------------------//


//slider
const navPeople = document.querySelector('.navigation-people');
const prevBtn = navPeople.querySelector('.navigation-people__prevBtn');
const nextBtn = navPeople.querySelector('.navigation-people__nextBtn');
const slidesList = navPeople.querySelector('.navigation-people__list');
const slides = Array.from(slidesList.querySelectorAll('li'));

function updateList() {
  slidesList.innerHTML = '';
  for (let item of slides) {
    slidesList.appendChild(item);
  }
};

prevBtn.addEventListener('click', function () {
  const firstitem = slides.shift();
  slides.push(firstitem);
  updateList();

});

nextBtn.addEventListener('click', function () {
  const lastItem = slides.pop();
  slides.unshift(lastItem);
  updateList();
});

updateList();
//-----------------------------------------------------------------//


//data rating
const table = document.querySelector('.container-table tbody');
const rating = data.rating;
const friends = data.friends;

function updateRating() {
  table.innerHTML = ''

  if (rating.length) {
    for (let i = 0; i < rating.length; i++) {

      let isFriends = friends.find(item => item.id == rating[i].id);

      table.insertAdjacentHTML('beforeend', `
        <tr class="empty-row">
        </tr>
        <tr class="table-item ${isFriends ? 'friends' : ''}">
          <td>${rating[i].id}</td>
          <td><img alt="icon" src="https://avatars.mds.yandex.net/i?id=718dd27ac084f39d599cd6c76445316e-5244772-images-thumbs&n=13"></td>
          <td>${rating[i].name} ${rating[i].lastName}</td >
          <td>${rating[i].points}</td>
        </tr >
      `)
    }
  }
}

updateRating();
//-----------------------------------------------------------------//


//go to university
const btnStep = document.querySelector('.navigation-university');
const iconGirl = document.querySelector('.map-icon');
const steps = [
  {
    left: 340,
    bottom: 75,
  },
  {
    left: 265,
    bottom: 30,
  },
  {
    left: 180,
    bottom: 15,
  },
  {
    left: 100,
    bottom: 40,
  },
  {
    left: 112,
    bottom: 105,
  },
];
let currentStep = 0;

btnStep.addEventListener('click', function () {
  currentStep++;
  goToPoint(currentStep);
});

function goToPoint(number) {

  if (number <= steps.length) {
    iconGirl.classList.add('hidden');
    setTimeout(() => {
      iconGirl.style.left = `${steps[number - 1].left}px`;
      iconGirl.style.bottom = `${steps[number - 1].bottom}px`;
      iconGirl.classList.remove('hidden');
    }, 1000);
  }
  return;
}






