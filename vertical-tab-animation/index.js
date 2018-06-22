
const handleButtonClick = (clickedButton) => {
  const activeButton = document.getElementsByClassName('active')[0];
  activeButton.className = activeButton.className.replace('active', '');
  clickedButton.className += ' active';
  if (activeButton != clickedButton) {
    changeMarkerPosition(getCenter(clickedButton))
  }
}

const changeMarkerPosition = (center) => {
  const marker = document.getElementsByClassName('marker')[0];
  marker.style.animation = null; // Force reflow for animation to work again. TODO: find most inexpensive way to do this. 
  marker.style.animation = marker.offsetWidth
  marker.style.transform = `translateY(${center - parseInt(marker.style.top)}px)`;
  marker.style.animation = `slug 500ms ease-in-out 5ms`;
}

const setButtonOnClicks =  () => {
  const buttons = document.getElementsByClassName('btn');
  for (let button of buttons) {
    button.addEventListener('click', () => {handleButtonClick(button)})
  }
}

const getCenter = (elem) => {
  return elem.offsetTop + (elem.offsetHeight/2) - 5; 
}

const setInitialMarkerPos = () => {
  const marker = document.getElementsByClassName('marker')[0];
  const activeButton = document.getElementsByClassName('active')[0]
  const center = getCenter(activeButton);

  marker.style.top = `${center}px`;
}

const initialiaze = () => {
  setInitialMarkerPos() 
  setButtonOnClicks()
}

initialiaze() 


// JS VERSION OF THE ANIMATION
// WARNING: THIS IS GROSS.

// Find element's center 
// function changeMarkerPosition(center) {
//   const marker = document.querySelector('.marker');
//   const intervalId = setInterval(frame, 1)

//   function frame() {
//     let currentPos = parseInt(marker.style.left);
//     let newPos;
//     if (parseInt(center) == currentPos) {
//       clearInterval(intervalId)
//       marker.style.width = '6px';
//     } else if (center < currentPos) {
//       newPos = `${currentPos - 1}px`;
//       marker.style.width = '30px';
//     } else {
//       newPos = `${currentPos + 1}px`;
//       marker.style.width = '30px';
//     }
//     marker.style.left = newPos;
//   } 
// }



//  function toggleItem(elem) {
//     for (var i = 0; i < elem.length; i++) {
//       elem[i].addEventListener('click', function(e) {
//         var current = this;
//         for (var i = 0; i < elem.length; i++) {
//           if (current != elem[i]) {
//             elem[i].classList.remove('active');
//             const marker_start = elem[i].offsetLeft + elem[i].offsetWidth / 2;
//             changeMarkerPosition(marker_start)
//           } else if (current.classList.contains('active') === true) {
//             current.classList.remove('active');
//             const marker_start = current.offsetLeft + current.offsetWidth / 2;
//             changeMarkerPosition(marker_start)
//             console.log(current.length)
//           } else {
//             const marker_end = current.offsetLeft + current.offsetWidth / 2;
//             changeMarkerPosition(marker_end)
//             current.classList.add('active')
//           }
//         }
//         e.preventDefault();
//       });
//     };
//   }
//   toggleItem(document.querySelectorAll('.btn'));
 

// function changeMarkerPosition(x_pos) {
//   var d = document.querySelector('.marker');
//   if (x_pos < parseInt(d.style.left)) {
//     while(parseInt(d.style.left) > x_pos) {
//       d.style.left = parseInt(d.style.left) - 1 + 'px';
//     }
//   } else {
//     while(parseInt(d.style.left) < x_pos) {
//       d.style.left = parseInt(d.style.left) + 1 + 'px';
//     }
//   }
// }
