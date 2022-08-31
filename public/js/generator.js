const formCheckPrint = document.querySelector('.prints-form');
const formCheckPic = document.querySelector('.pictures-form');
const radio = formCheckPrint.querySelectorAll('.form-check-input');
const radio2 = formCheckPic.querySelectorAll('.form-check-input');
const sockPrint = document.querySelector('#sock-prints');
const sockPictures = document.querySelector('#sock-pictures ');

for (let i = 0; i < radio.length; i++) {
  radio[i].onclick = function () {
    sockPrint.style.backgroundImage = `url('/img/print${i}.png')`;
    console.log(i);
  };
}

for (let i = 0; i < radio2.length; i++) {
  radio2[i].onclick = function () {
    sockPictures.style.backgroundImage = `url('/img/picture${i}.png')`;
    console.log(i);
  };
}
