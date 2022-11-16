
//scope chain and lexical env
// function a (){
//     var b = 10;
//     c();
//     function c (){
//         console.log(b);
//         var b = 30;
//     }
// }

// a();


//let and const are hoisted
// let a = 10;
// console.log(a);
// // var b = 100;

// const b = 100;


//block 
//compound statement
//if js expects single statement and 
// we write multiple statements
// if (true) {
//     var a = 10;
//     console.log(a);
// }

//this is called block
c
// block scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

    console.log(a);
    console.log(b);
    console.log(c); 

    


//Closure - function along with its lexical scope
// function a (){
//         var x = 10;
//         function b (){
//             console.log(x);
//         }
//         return b ;
//     }

// var c = a();
// console.log(c);
// //......
// c();


//complex closure - function along with its whole scope
// function s (){
//     var y = 100;
//     function a (){
//         var x = 10;
//         function b (){
//             console.log(x,y);
//         }
//         b() ;
//     }
//     a();
// }
// s();


    










