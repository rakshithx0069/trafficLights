const red=document.querySelector('.red');
const yellow=document.querySelector('.yellow');
const green=document.querySelector('.green');

function changeLights(){
    setTimeout(()=>{
        red.style.backgroundColor='red';
        yellow.style.backgroundColor='transparent';
        green.style.backgroundColor='transparent';
        setTimeout(()=>{
            red.style.backgroundColor='transparent';
            yellow.style.backgroundColor='yellow';
            green.style.backgroundColor='transparent';
            setTimeout(()=>{
                red.style.backgroundColor='transparent';
                yellow.style.backgroundColor='transparent';
                green.style.backgroundColor='green';
                changeLights();
            },2000)
        },1000)
    },2000);

}
changeLights();