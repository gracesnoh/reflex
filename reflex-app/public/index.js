function animate(element, className, removeClassDelay=0) {
  element.classList.add(className);
  element.addEventListener('animationend', function(event) {
    setTimeout(function () {
        event.srcElement.classList.remove(className);
    }, removeClassDelay);
  });
}

// notification animation
function triggerNotify() {
    const notification = document.getElementsByClassName('rx-notification')[0]
    animate(
      notification.getElementsByClassName('rx-notification__img')[0],
      'rx-notification__img--animate'
    );
    animate(
      notification.getElementsByClassName('rx-notification__badge')[0],
      'rx-notification__badge--animate',
      1000
    );
}

// input animation
function animateInputError(inputField) {
  animate(inputField, 'rx-input--error');
}

function animateInputSuccess(inputField) {
  animate(inputField, 'rx-input--success', 1000);
  const checkImg = inputField.parentElement.getElementsByClassName('rx-input-success__img')[0];
  animate(checkImg, 'rx-input-success__img--animate', 1000);
}

function animateInputSuccessFromLanding() {
  const input = document.getElementsByClassName('rx-input-success__input')[0];
  animateInputSuccess(input)
}

function animateInputErrorFromLanding() {
  const input = document.getElementsByClassName('rx-input-error')[0];
  animateInputError(input)
}

// progress bar animation
function startProgress() {
  const element = document.getElementsByClassName('rx-progress-bar__progress-bar')[0]
  animate(
    element,
    'rx-progress-bar__progress-bar--animate',
    2000,
  );
}

// crypto kitty example
document.addEventListener("DOMContentLoaded", function(event) {
  const kittyCardWrapper = document.getElementsByClassName('kitty-card-wrapper')[0];
  kittyCardWrapper.addEventListener('mouseover', function() {
    kittyCardWrapper.getElementsByClassName('kitty-card')[0].classList.toggle('kitty-card-scale-in');
  });
  kittyCardWrapper.addEventListener('mouseout', function() {
    kittyCardWrapper.getElementsByClassName('kitty-card')[0].classList.toggle('kitty-card-scale-out');
  });
});
