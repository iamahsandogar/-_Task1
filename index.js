var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

document.getElementById('emailForm').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    console.log('Email', email);
})