const pokemon = document.querySelector('.pokemon');
const cano = document.querySelector('.cano')

const jump = ()=>{
    pokemon.classList.add('jump');
setTimeout(()=>{
    pokemon.classList.remove('jump');     
     
 
},500);
}

const loop= setInterval(()=> {

 const canoPosition = cano.offsetLeft
 const pokemonPosition = +window.getComputedStyle(pokemon).bottom.replace('px','');

 if(canoPosition <= 35 && canoPosition > 0 && pokemonPosition < 80){ 
cano.style.animation ='none'
cano.style.left=`${canoPosition}px`;

pokemon.style.animation ='none'
pokemon.style.bottom=`${pokemonPosition}px`;

pokemon.src="./imagensREAL/emoji.png";

clearInterval(loop);
 }
},10);




document.addEventListener('keydown',jump)
