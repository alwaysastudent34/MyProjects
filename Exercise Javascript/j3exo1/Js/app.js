
const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const paragraphe3 = document.getElementById('paragraphe3');
const bouton4 = document.getElementById('bouton4');
const paragraphes = document.querySelectorAll('p');

bouton1.addEventListener('click',function() {
    paragraphe3.classList.add('masquer');

});

bouton2.addEventListener('click', function(){
    paragraphes.forEach(function(paragraphe){
        paragraphe.classList.add('masquer');
        

    });
});

bouton3.addEventListener('click', function(){
    paragraphes.forEach(function(paragraphe){
        paragraphe.classList.remove('masquer');
    });
});

bouton4.addEventListener('click',function(){
    paragraphes.forEach(function(paragraphe){
        paragraphe.style.backgroundColor = 'yellow';

    });
});