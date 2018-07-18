// // TODO: Change these customers
// const customers = [
//     'airbnb', 
//     'bank-of-america', 
//     'facebook',
//     'lyft',
//     'starbucks-coffee',
//     'tesla', 
// ]

// for(let customer of customers) {
//     const img = new Image();
//     img.src = `./images/${customer}.svg`;
//     img.onload = function() {
//         document.getElementsByClassName("customersContainer")[0].appendChild(this);
//     };
// }


const onMouseEnter = () => { 
    const overlay = document.getElementsByClassName('customers__overlay')[0];
    overlay.classList.remove('hiding');
    overlay.classList.add('showing');

    const logos = document.getElementsByClassName('logo');
    for(let logo of logos) {
        logo.classList.remove('focusing');
        logo.classList.add('blurring');
    }
}

const onMouseLeave = () => { 
    const overlay = document.getElementsByClassName('customers__overlay')[0];
    overlay.classList.remove('showing');
    overlay.classList.add('hiding');

    const logos = document.getElementsByClassName('logo');
    for(let logo of logos) {
        logo.classList.add('focusing');
    }
}
