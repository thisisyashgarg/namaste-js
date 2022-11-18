// setTimeout(function () {
//     console.log('timer')
// }, 5000);

// function first (parameter){
//     console.log('first');
//     parameter();
// }
// first(function second(){ console.log('second')} );


function click(){
    let count = 0;
    document.getElementById("clickMe", function xyz(){
        console.log('button clicked', count)
    });
}
click();