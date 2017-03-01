var Raven = require('raven-js');
    Raven.addPlugin(require('raven-js/plugins/chrome-extension'));

Raven.config('http://402f1559a7214c2c9539ae63fe60c335@localhost:8000/8',{
  release:'1.0.7'
}).install();

let mybutton = document.getElementById('btn')
function foo(){
  isnt.there()
  mybutton.innerHTML = Math.random()
}

function bar(){
  foo()
}
mybutton.addEventListener("click", function(){
  bar()
});
