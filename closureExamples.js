//Q1
// function x(){
//     var i = 1;
//     setTimeout(() => {
//        console.log(i);
//     }, 1000)
//     console.log('Namaste Javascript');
// }
// x();


//Q2
// function x(){
//     for(var i = 1; i<= 5; i++ ){

//         function y(val){  //we supplied new i every time
//             setTimeout(() => {
//                console.log(val);
//             }, val *1000)
//         }

//         y(i);

//     }

//     console.log('Namaste Javascript');
// }
// x();

// this can be solved by using block scope, cause it has block scope, and
// every time loop runs, new i is formed

//Q3
function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

const close = outer();
close();





