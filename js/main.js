(function(){

    'use strict';
const cs = new CSInterface();

<<<<<<< HEAD
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
=======
document.querySelector('button').addEventListener('click', function(evt){
    cs.evalScript('sayHello("Notes Submitted!")')})
>>>>>>> dd63bfcfab94850f1b7ae703ad889c49aa268070

});


})
