const shareButton = document.querySelector('.button');
const socialMedia = document.getElementById('social-media-div');

let isButtonVisible = false;

shareButton.addEventListener('click', function(){
    if(isButtonVisible) {
        isButtonVisible = true;
    } else {
        isButtonVisible = false;
    }
    socialMedia.classList.toggle('hide'); 
});

