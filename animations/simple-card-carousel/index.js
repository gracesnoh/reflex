// https://codepen.io/edmundojr/pen/eNPJVW
// https://github.com/metafizzy/flickity/blob/master/css/flickity.css
// https://codepen.io/desandro/pen/wjeBpp

var carousel = document.querySelector('.carousel');
var carouselTransformPos = 0
// var cells = carousel.querySelectorAll('.carousel__cell');
var selectedIndex = 0;

// function rotateCarousel() {
//     cell.classList.add('selected')
//     var angle = 10 * selectedIndex * -1;
//     carousel.style.transform =  'rotateY' + '(' + angle + 'deg)';
// }
  

const handleCardClick = (index) => {
    const prevSelectedCard = document.getElementsByClassName('selected')[0];
    prevSelectedCard.className = prevSelectedCard.className.replace('selected', '');

    const selectedCard = document.getElementsByClassName('carousel__cell')[index];
    selectedCard.className += ' selected';
    if (prevSelectedCard != selectedCard) {
      slideCarousel(getCenter(prevSelectedCard), getCenter(selectedCard))
    }
  }

 
const slideCarousel = (prevSelectedCenter, newCenter) => {
    console.log('test');
    const marker = document.getElementsByClassName('carousel')[0];
    carouselTransformPos =  carouselTransformPos + prevSelectedCenter - newCenter
    // marker.style.animation = null; // Force reflow for animation to work again. TODO: find most inexpensive way to do this. 
    // marker.style.animation = marker.offsetWidth
    marker.style.transform = `translateX(${carouselTransformPos}px)`;
    
    // marker.style.animation = `slug 500ms ease-in-out 20ms`;
}

// var cells = document.querySelectorAll('.carousel__cell');
// for(let cell of cells) {
//     cell.addEventListener( 'click', function() {
//         const selectedElem = document.getElementsByClassName('selected')[0];
//         selectedElem.classList.remove('selected');
//         cell.classList.add('selected')
//         carousel.classList.add('moving')
//       });
// }

const setCardOnClicks =  () => {
    const cards = document.getElementsByClassName('carousel__cell');
    Array.prototype.forEach.call(cards, (card, index) => {
        card.addEventListener('click', () => {
            handleCardClick(index);
            handleButtonClick(index);
        });
    })
}

const handleButtonClick = (index) => {
    // Set button class to selected
    const prevSelectedButton = document.getElementsByClassName('selected')[1];
    prevSelectedButton.className = prevSelectedButton.className.replace('selected', '');

    const selectedButton = document.getElementsByClassName('button')[index];
    selectedButton.className += ' selected';

    // Animation? 
}


const setButtonOnClicks =  () => {
    const buttons = document.getElementsByClassName('button');
    Array.prototype.forEach.call(buttons, (button, index) => { 
        button.addEventListener('click', () => {
            handleCardClick(index)
            handleButtonClick(index)
        });
    })
}

const getCenter = (elem) => {
    return elem.offsetLeft + (elem.offsetWidth / 2) - 5; 
}

const setInitialMarkerPos = () => {
    const marker = document.getElementsByClassName('carousel')[0];
    const activeButton = document.getElementsByClassName('selected')[0]
    const center = getCenter(activeButton);
   
    // carouselTransformPos = center; 
    // marker.style.transform = `translateX(${carouselTransformPos}px)`;
  }

const initialiaze = () => {
    setInitialMarkerPos() 
    setCardOnClicks()
  }
   
  initialiaze() 
   
   

// var nextButton = document.querySelectorAll('.carousel__cell');
// nextButton.addEventListener( 'click', function() {
//   selectedIndex++;
//   this.rotateCarousel();
// });


// function test() {
//     console.log(cells[selectedIndex])
// }test();

// // set initials
// onOrientationChange();
