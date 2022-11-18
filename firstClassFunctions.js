//function statement aka function declaration
function a(){
    console.log('a was called')
}
 

//function expression
var b = function () {
    console.log('b was called')
}



//anonymous function
// function (){}
// this throws an error "SyntaxError: Function statements require a function name" 
// anonymous functions cannot be used as normal func statements
// they can be only assigned to a variable as value



//named function expression
var d = function xyz () {
    console.log('b was called')
}
// xyz();   //ref error because xyz is not defined in global scope
b();



//diff bw parameter and arguments
function yash (parameter){  //this label is called parameter
    console.log('yash');
}
yash('argument'); // value assigned to parameter is argument



//FIRST CLASS FUNCTIONS / FIRST CLASS CITIZENS
//ability to pass functions as values
function firstClass(param1){
    
    return param1;
}
console.log(firstClass(function(){}));



//arrow functions
// all things mentioned above can be done with arrow functions as well