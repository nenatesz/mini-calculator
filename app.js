const display = document.querySelector('#calc_display');
const calc_button = document.querySelector('.num-button');
const total = document.getElementById('total');
const clear = document.getElementById('clear')


calc_button.addEventListener('click', clickNum);
total.addEventListener('click', clickTotal);
clear.addEventListener('click', clickClear);



function clickClear(e){
    display.value = 0
};

function clickTotal(e){
    display.value = eval(display.value)
   
};

function clickNum(e){
    
    if(e.target !== total && e.target !== clear){
       if (display.value === '0') {
        display.value = e.target.value
       }else{
        display.value = display.value + e.target.value
    }
    }
    

}



