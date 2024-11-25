const image1 = window.document.getElementById('image1');
const image2 = window.document.getElementById('image2');
const image3 = window.document.getElementById('image3');

console.log(image1);

const paragraphs = window.document.getElementsByTagName('p');
console.log(paragraphs);

Array.from(paragraphs).forEach((paragraph, index) => {
  paragraph.addEventListener('click', (e) => {
    slider(index++);
  });
});

function slider(imageToShow) {
  if (imageToShow === 1) {
    image1.classList.add('show');
    image1.classList.remove('hide');

    image2.classList.add('hide');
    image2.classList.remove('show');

    image3.classList.add('hide');
    image3.classList.remove('show');
  } else if (imageToShow === 2) {
    image2.classList.add('show');
    image2.classList.remove('hide');

    image1.classList.add('hide');
    image1.classList.remove('show');

    image3.classList.add('hide');
    image3.classList.remove('show');
  } else if (imageToShow === 3) {
    image3.classList.add('show');
    image3.classList.remove('hide');

    image1.classList.add('hide');
    image1.classList.remove('show');

    image2.classList.add('hide');
    image2.classList.remove('show');
  }
}
