(function(){

    'use strict';

const cs = new CSInterface();

document.querySelector('button').addEventListener('click', function(evt){
    cs.evalScript('sayHello("Notes Submitted!")')})

}())