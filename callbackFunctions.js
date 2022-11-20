// setTimeout(function () {
//     console.log('timer')
// }, 5000);

// function first (parameter){
//     console.log('first');
//     parameter();
// }
// first(function second(){ console.log('second')} );


// function click(){
//     let count = 0;
//     document.getElementById("clickMe", function xyz(){
//         console.log('button clicked', count)
//     });
// }
// click();


//BLOCKING THE MAIN THREAD BY USING DATE API
// console.log('start');

// console.time();
// setTimeout(function (){
//     console.log('callback')
//     console.timeEnd();
// }, 5000);
// console.log('end');

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }

// console.log('after 10 seconds')

//ANOTHER EXAMPLE
console.log('start');
console.time();
setTimeout(function (){
    console.log('callback')
    console.timeEnd();
}, 0); // even if timer is 0, the function has to go through the callback queue
// this takes some time
console.log('end');
