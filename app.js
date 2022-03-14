const images = [
    'images/slider-1.jpg',
    'images/slider-2.jpg',
    'images/slider-3.jpg',
    'images/slider-4.jpg',
    'images/slider-5.jpg',
    'images/slider-6.jpg',
    'images/slider-7.jpg',
    'images/slider-8.jpg',
    'images/slider-9.jpg',
    'images/slider-10.jpg'
]

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');

setInterval( () => {

    if(imgIndex >= images.length){
        imgIndex = 0;
    }

    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1500)