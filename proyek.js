var body = document.body;
var modeButton = document.getElementsByClassName('mode')[0];
var slideKiri =document.getElementsByClassName('slideKiri')[0];
var slideKanan =document.getElementsByClassName('slideKanan')[0];
var foto = document.getElementsByClassName('profil')[0];



let i = 0;
var photos = ['profil.jfif','profil2.jfif', 'profil3.jfif']


modeButton.addEventListener('click', ubahMode);
slideKiri.addEventListener('click', slideFotoKiri);
slideKanan.addEventListener('click', slideFotoKanan);


function ubahMode() {
    body.classList.toggle  ('bodyLight');
    body.classList.toggle('bodyDark');
    if (body.classList.contains('bodyLight')){
        modeButton.innerHTML = "Dark Mode"
    }
    else {
        modeButton.innerHTML = "Light Mode"
    }
}


function slideFotoKiri() {
    i = i-1;
    if (i<0) {
        i = 2;
    }
    foto.setAttribute('src', photos[i]);
}

function slideFotoKanan() {
    i = i+1;
    if (i>2) {
        i = 0;
    }
    foto.setAttribute('src', photos[i]);
}

