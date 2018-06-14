// Inspiration: https://codepen.io/a_akos/pen/iDfqa
// http://jsfiddle.net/g9dn1a09/56/ 

function setInitialMarkerLeftPos() {
  const d = document.querySelector('.marker');
  const activeElem = document.querySelector('.active')

  d.style.left = activeElem.offsetLeft + activeElem.offsetWidth / 2 + "px";
}
setInitialMarkerLeftPos() 

// TODO Use ID selectors.
// TODO Make a function for this.  
// Get all buttons with class="btn" inside the container
const allButtons = document.getElementsByClassName('btn');

// Loop through the buttons and add the active class to the current/clicked button
for (let button of allButtons) {
  button.addEventListener("click", function() {
    const currentActive = document.getElementsByClassName('active')[0];
    currentActive.className = currentActive.className.replace('active', '');
    this.className += " active";

    const center = this.offsetLeft + this.offsetWidth / 2;
    changeMarkerPosition(center)
  });
}

function changeMarkerPosition(center) {
  const marker = document.querySelector('.marker');
  marker.style.animation = null;
  marker.style.animation = marker.offsetWidth
  // const intervalId = setInterval(frame, 1)
  marker.style.transform = `translateX(${center - parseInt(marker.style.left)}px)`;
  marker.style.animation = `slug .5s ease-in-out`;

  function frame() {
    let currentPos = parseInt(marker.style.left);
    let newPos;
    if (parseInt(center) == currentPos) {
      clearInterval(intervalId)
      marker.style.width = '6px';
    } else if (center < currentPos) {
      newPos = `translateX${currentPos - 1}px`;
      marker.style.width = '30px';
    } else {
      newPos = `${currentPos + 1}px`;
      marker.style.width = '30px';
    }
    marker.style.left = newPos;
  } 
}

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
//       elem[i].addEventListener("click", function(e) {
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
