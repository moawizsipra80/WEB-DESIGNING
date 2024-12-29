const slider=document.querySelector('.slider');
let count = 0;
function slide(){
count-=2;
slider.style.transform = `translateX(${count}px)`;
if(Math.abs(count)>= slider.scrollWidth / slider.children.length){
    count=0;
}
}
setInterval(slide,13);

let name=prompt('what is your name');
document.getElementById('name').innerHTML = `my name is ${name} and i am using your website`;

function changecolor()
{
let color=document.getElementById('color');
color.style.backgroundColor='black';
color.style.fontFamily='serief';
color.style.color='white';
window.location.href='cotactus.html';
} 
