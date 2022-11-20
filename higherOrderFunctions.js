//Functions which return functions or take functions as arguments are higher order functions
//functional programming
// think in terms of functions
//assign small tasks to functions

let radius = [2, 3, 4];

function area (radius){
    return Math.PI * radius *radius;
}

function circumference (radius){
    return 2 * Math.PI * radius ;
}

function diameter (radius){
    return 2 * radius;
}

function calculate (arr, logic){
   let output = [];
    for( let i = 0; i < arr.length ; i++){
        output.push(logic(arr[i]));
    }
    console.log(output);
}

calculate(radius, area);
calculate(radius, circumference);
calculate(radius, diameter);

//this code is similar to map
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));
