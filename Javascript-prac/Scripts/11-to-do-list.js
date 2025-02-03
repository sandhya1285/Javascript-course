const myArray=[];
function getText(selector){
    const Element=document.querySelector(selector);
    const item=Element.value;
    addToArray(item);
}
function addToArray(arrayElem){
    myArray.push(arrayElem);
    console.log(myArray);
    displayArray(myArray);
}
function displayArray(arr){
    let value='';
    let HTML='';
    for(let i=0;i<arr.length;i++){
        value=arr[i];
        HTML=HTML+`<p> ${value} </p>`;
        document.querySelector('.result').innerHTML=HTML;
    }
}