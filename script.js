let buttonFeadback = document.querySelector('.button-feadback');
let buttonPhone = document.querySelector('.button-phone');
/* let buttonClose = document.querySelector('.button-close'); */
let modalChart = document.querySelector('.modal-chart');
let modalPhone = document.querySelector('.modal-phone');

let modal = document.querySelectorAll('.modal');

buttonFeadback.addEventListener('click', function() {
    modalChart.classList.add('_visible');
});

buttonPhone.addEventListener('click', function() {
    modalPhone.classList.add('_visible');
});

let buttonClose = [];
for (let i = 0; i < modal.length; i++) {
    buttonClose[i] = modal[i].querySelector('.button-close'); 
    buttonClose[i].addEventListener('click', function() {
        modal[i].classList.remove('_visible');
    });
}


