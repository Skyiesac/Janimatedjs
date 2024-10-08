
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];


function newrd() {
    const x = Math.random() * canvas.width;
    const length = Math.random() * 20+10;
    const speed = Math.random() * 20 ;
    raindrops.push({ x, y: 0, length, speed });
}

function rdds() {
    for (let drop of raindrops) {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
            drop.y = 0; 
            drop.x = Math.random() * canvas.width; 
        }
    }
}

function crerds() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'; 
    for (let drop of raindrops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
    }
}
function ani() {
    if (rains) { 
        rdds();
        crerds();
        requestAnimationFrame(ani);
    }
}

function init() {
    for (let i = 0; i < 150; i++) { 
        newrd();
    }
}

let rains = true; 
document.getElementById('rainy').addEventListener('click', () => {
    rains = !rains; 
    if (rains) {
        ani();
        document.getElementById('rainy').innerText = 'Stop Rain'; 
    } else {
        document.getElementById('rainy').innerText = 'Start Rain'; 
    }
});
init(); 


let issunl=false;
document.getElementById('sunl').addEventListener('click', () => {
    issunl =! issunl;
    if(issunl){
        document.body.style.backgroundImage= "url('images/day.jfif')";
        document.getElementById('sunl').innerText = 'NIGHT'; 
    }
    else{
        document.body.style.backgroundImage= "url('images/night.jfif')";
        document.getElementById('sunl').innerText = 'DAY'; 
    }
});
