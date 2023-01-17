let interaction = document.querySelector('a:nth-of-type(12)');
let spin = document.querySelector("a:nth-of-type(1)");
let hop = document.querySelector("a:nth-of-type(3)");
let fall = document.querySelector("a:nth-of-type(4)");
let mousedownTime;
let fire = document.querySelector("*");
let bomb = document.querySelector("#bomb");
let targets = document.querySelectorAll(".target");
let sprint = document.querySelector("a:nth-of-type(5)");
let fix = document.querySelector("a:nth-of-type(6)");
let z = 0;
let scrollRandom = document.querySelector("a:nth-of-type(7)");
let root = document.documentElement;
let waveFlow = document.querySelector("a:nth-of-type(8)");
let waveApply = document.querySelector("body");
let shake = document.querySelector("a:nth-of-type(10)");
let shakeTargets = document.querySelectorAll("a");

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
spin.addEventListener("click", spinHandler);
hop.addEventListener("keyup", hopHandler);
fall.addEventListener("click", fallHandler);
fix.addEventListener("click", fixHandler);
scrollRandom.addEventListener("scroll", scrollHandler);
shake.addEventListener("click", shakeHandler);

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function spinHandler(){
  spin.classList.toggle("spin");
}

function hopHandler(event){
  if(event.keyCode === 32 && hop.classList.contains("hop")){
    hop.classList.toggle("hop");
    hop.classList.toggle("hopagain");
  }
  else if(event.keyCode === 32){
    hop.classList.toggle("hop");
    hop.classList.remove("hopagain");
  }
}

function fallHandler(){
  fall.classList.toggle("fall");
  fall.removeEventListener("click", fallHandler);

  fall.addEventListener('mousedown', () => {
    mousedownTime = new Date().getTime();
    fire.classList.toggle("fire");
    fall.classList.toggle("charge");
  });
  
  fall.addEventListener('mouseup', function () {
    fire.classList.toggle("fire");
    const mouseupTime = new Date().getTime(),
          timeDifference = mouseupTime - mousedownTime;
          console.log(timeDifference);
          if(timeDifference >= 2500){
            bomb.classList.toggle("nuke");
            setTimeout(() => { for(let i = 0; i < targets.length; i++){
              targets[i].style.display = "none";
            }}, 2200)

          }
  });
}

sprint.addEventListener('mousedown', () => {
  sprint.classList.toggle("spring");
});

sprint.addEventListener('mouseup', () => {
  sprint.classList.toggle("spring");
});

function fixHandler(){
  z++;

  for(let i = 0; i < z; i++){
    targets[i].style.display = "inline-block";
  }
}




function scrollHandler(){

  let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"; 

  setTimeout(() =>{
    root.style.setProperty('--highlight-primary', color);
  }, 10)
}


waveFlow.addEventListener('mousedown', () => {
  waveApply.classList.toggle("wave");
});

waveFlow.addEventListener('mouseup', () => {
  waveApply.classList.toggle("wave");
});

function shakeHandler(){

  for(let i = 0; i < shakeTargets.length; i++){
    let fallRandom = Math.random() * (80 - 60) + 40 + "vh";
    let rotateRandom = Math.random() * (60 - 10) + 10 + "deg"
  
    root.style.setProperty('--shake-fall', fallRandom);
    root.style.setProperty('--shake-rotate', rotateRandom);

    if(i < 5){
      shakeTargets[i].classList.toggle("shake");
    }
    else{
      shakeTargets[i].classList.toggle("shake-alternate");

    }
    

  }


}