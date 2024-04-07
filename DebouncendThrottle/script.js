
const btn = document.querySelector(".testDebounce")
const count = document.querySelector(".count");
const apiCount = document.querySelector(".apicount");

var counter = 0;
var apiTriggered = 0;

const myDebounce = (fn, d) => {
    let timer;
    return function(...args){
    if(timer) clearInterval(timer)
    timer = setTimeout(() => {
        fn()
    }, d)}
}

const myThrottle = (fn, d) => {
    let timer = 0;
    return function(...args){
       let now = new Date().getTime();
       if(now - timer < d) return;
       timer = now
       return fn(args)
    }
}

const testdebounce =  myThrottle(() => {
    apiCount.innerHTML = ++apiTriggered 
}, 1000)


btn.addEventListener("click", () => {
    count.innerHTML = ++counter;
    // apiCount.innerHTML = ++apiTriggered
    testdebounce()
})
