var Raven = require('raven-js');

Raven.config('https://29227a0fd83245c188093c775552099c@sentry.io/130905',{
  release:'1.0.2'
}).install()


let mybutton = document.getElementById('btn')

mybutton.addEventListener("click", function(){
  mybutton.innerHTML = "bundle"
  console.log("test")
  zz.BAZ();
});
