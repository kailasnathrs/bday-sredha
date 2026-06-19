let opened = false;

/* =========================
   RUNNING NO BUTTON
========================= */

const noBtn = document.getElementById("noBtn");

if(noBtn){

function moveNoButton(){

const btnWidth = noBtn.offsetWidth;
const btnHeight = noBtn.offsetHeight;

const maxX =
window.innerWidth - btnWidth - 20;

const maxY =
window.innerHeight - btnHeight - 20;

const randomX =
Math.random() * maxX;

const randomY =
Math.random() * maxY;

noBtn.style.position = "fixed";

noBtn.style.left =
randomX + "px";

noBtn.style.top =
randomY + "px";
}

noBtn.addEventListener(
"mouseenter",
moveNoButton
);

noBtn.addEventListener(
"touchstart",
moveNoButton
);

}

/* =========================
   YES PAGE
========================= */

function showYesMessage(){

document.getElementById(
"questionPage"
).classList.add("hidden");

document.getElementById(
"yesPage"
).classList.remove("hidden");

createConfetti();

}

/* =========================
   CONTINUE
========================= */

function showGallery(){

document.getElementById(
"yesPage"
).classList.add("hidden");

document.getElementById(
"mainContent"
).classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* =========================
   HEARTS
========================= */

function floatingHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(4 + Math.random()*4) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(
floatingHeart,
500
);

/* =========================
   ROSE PETALS
========================= */

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌹";

petal.style.left =
Math.random()*100 + "vw";

petal.style.animationDuration =
(6 + Math.random()*6) + "s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},12000);

}

setInterval(
createPetal,
1800
);

/* =========================
   GOLD SPARKLES
========================= */

function sparkle(){

const spark =
document.createElement("div");

spark.classList.add("sparkle");

spark.style.left =
Math.random()*100 + "vw";

spark.style.top =
Math.random()*100 + "vh";

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},2000);

}

setInterval(
sparkle,
300
);

/* =========================
   CONFETTI
========================= */

function createConfetti(){

for(let i=0;i<180;i++){

const conf =
document.createElement("div");

conf.style.position="fixed";

conf.style.width="10px";
conf.style.height="10px";

conf.style.left=
Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.background=
`hsl(${Math.random()*360},
100%,60%)`;

conf.style.borderRadius="50%";

document.body.appendChild(conf);

const duration =
3000 + Math.random()*3000;

conf.animate(
[
{
transform:
"translateY(0)"
},
{
transform:
`translateY(${window.innerHeight+300}px)
rotate(720deg)`
}
],
{
duration:duration
}
);

setTimeout(()=>{
conf.remove();
},duration);

}

}

/* =========================
   LETTER + MUSIC
========================= */

function openLetter(){

if(opened) return;

opened = true;

const music =
document.getElementById(
"birthdayMusic"
);

if(music){
music.play();
}

document.getElementById(
"letterCard"
).classList.remove(
"hidden"
);

createConfetti();

const message = `

Happy Birthday Sredha ❤️

Today is your special day,
and I wanted to make something
special just for you.

Your smile has a way of making
everything feel brighter.

Your kindness,
your positivity,
and the beautiful energy
you bring wherever you go
make you truly special.

May this birthday bring you
endless happiness,
beautiful memories,
success,
love,
and everything your heart
dreams of.

Never stop smiling,
never stop shining.

You deserve all the happiness
in the world.

Happy Birthday Once Again ❤️✨

With Warm Wishes 🌹
`;

const target =
document.getElementById(
"typing"
);

target.innerHTML = "";

let i = 0;

function typeWriter(){

if(i < message.length){

target.innerHTML +=
message.charAt(i);

i++;

setTimeout(
typeWriter,
25
);

}

}

typeWriter();

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

}

/* =========================
   EXTRA GOLD STARS
========================= */

function createStar(){

const star =
document.createElement("div");

star.innerHTML = "✨";

star.style.position =
"fixed";

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*100+"vh";

star.style.pointerEvents =
"none";

star.style.opacity =
Math.random();

star.style.fontSize =
(10+Math.random()*20)+"px";

star.style.zIndex="0";

document.body.appendChild(
star
);

star.animate(
[
{opacity:0},
{opacity:1},
{opacity:0}
],
{
duration:3000
}
);

setTimeout(()=>{
star.remove();
},3000);

}

setInterval(
createStar,
1000
);