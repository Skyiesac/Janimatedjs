let i = 0;
function growth(){ 
const nxtimg= document.getElementById('grw');
let toshow = document.getElementById('tree');

const disarr = [
"images/tree1r.png",
"images/tree1.png",  
"images/tree3.png",  
"images/tree5.png", 
"images/tree6.png", 
"images/tree7.png", 
"images/tree8.png", 
"images/tree9.png", 
"images/tree10.png", 
"images/tree11.png", 
"images/tree12.png", 
"images/tree13.png", 
"images/tree14.png", 
"images/tree15.png",  
"images/tree17.png", 
"images/tree18.png", 
"images/tree19.png", 
"images/tree20.png", 
];
i++;
if(i==disarr.length || i==(disarr.length-1))timetoby();
if (i >= disarr.length) {i = 0;  back()}
toshow.src = disarr[i];
;
}

function timetoby(){
    document.getElementById('idk').innerHTML= " It's the time to say good bye, mate .Thankyou for raising me up. Please help me in raising this little guy !" ;
}
function back(){
document.getElementById('idk').innerHTML="Hey! Please help me in growing up ,kind soul and don't forget , I need water and sunlight to grow too !";
}
