let interaction = document.querySelector('a:nth-of-type(12)');
let spin = document.querySelector("a:nth-of-type(1)");
let hop = document.querySelector("a:nth-of-type(3)");

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
spin.addEventListener("click", spinHandler);
hop.addEventListener("keyup", hopHandler);

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function spinHandler(){
  spin.classList.toggle("spin");
}

function hopHandler(event){
  if(event.keyCode === 32){
    hop.classList.toggle("hop");
  }
}