(function(){

    'use strict';
const cs = new CSInterface();

document.getElementById('add-button').addEventListener('click', ()=>{
    console.log("Clicked")
    const input = document.getElementById('input-text').trim();
    if(!input) return;
    const blocks = input.split("\r\n");
    blocks.forEach((text,i) => {
        const jsx = `createTextLayer("${text}")`;
        cs.evalScript(jsx);
    });
    
    input.value = '';

});


})
