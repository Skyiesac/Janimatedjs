const nxtimg= document.getElementById('grw');
const toshow = document.getElementById('tree');

const disarr ={
 
}
let i=0;
nxtimg.addEventListener('click', ()=>{
    i++;
    if(i>=disarr.length) i=0;
    toshow.src= disarr[i];
});