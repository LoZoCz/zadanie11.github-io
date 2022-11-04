var wyn = document.querySelector('.wynik');
var l1 = document.querySelector('.number1');
var l2 = document.querySelector('.number2');
var obl = document.querySelector('.oblicz');
var res = document.querySelector('.reset');  

function obliczania(){

    const a = parseFloat(l1.value);
    const h = parseFloat(l2.value);

    //console.log(a, h);

    let pole = (a*h)/2;

    if(a <= 0 || h <= 0){
        wyn.innerText = `Pole nie jest możliwe`;
    } else {
        wyn.innerText = `Wynik to: ${pole}`;
    }
}


function animacja(){
    
    const pokaz = [
        { opacity: '0' },
        { opacity: '1'  }
    ];
    
    const czas = {
        duration: 700,
      }
      
    wyn.animate(pokaz, czas);
}

function wszystko(){
    animacja();
    obliczania();
}

res.addEventListener('click', () => {

    location.reload();
})

obl.addEventListener('click', wszystko);