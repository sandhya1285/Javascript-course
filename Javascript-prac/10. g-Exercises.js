function toggled(selector){
    const buttonElem=document.querySelector(selector);
    if(!buttonElem.classList.contains('is-toggled')){
        turnOffPreviousButton();
    }
    buttonElem.classList.add('is-toggled');
}
function turnOffPreviousButton(){
    const prevButton=document.querySelector('.is-toggled');
    if(prevButton){
        prevButton.classList.remove('is-toggled');
    }
}
function toggle(selector){
    const buttonElem=document.querySelector(selector);
    if(buttonElem.classList.contains('is-toggled')){
        buttonElem.classList.remove('is-toggled');
    }
    else {
        buttonElem.classList.add('is-toggled');
    }
}
function handleCost(event){
    if(event.key==='Enter'){
        calculateShipping();
    }
}
function calculateShipping(){
    const cost=document.querySelector('.Cost');
    let val=Number(cost.value);
    if(val<=0){
        console.log(val);
        document.querySelector('.result').innerHTML='Please enter the cost greater than 0';
    }
    else if(val<40){
        console.log(val);
        val+=10;
        document.querySelector('.result').innerHTML=val;
    }
    else{
        document.querySelector('.result').innerHTML=cost.value;
    }
    
}