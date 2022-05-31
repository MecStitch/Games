const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

      mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

   if(pipePosition <= 60 && pipePosition > -115 && marioPosition < 160) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'img/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

   }

}, 10);

document.addEventListener('keydown', jump);



/*var mario =
document.getElementById("mario");
var pipe = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

var checkDead = setInterval (function(){
    var marioTop =
    parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    var pipeLeft =
    parseInt(window.getComputedStyle(pipe).getPropertyValue("top"));
},10);*/