//Functions which return functions or take functions as arguments are higher order functions

let radius = [2, 3, 4];
// function calculate (radius){
//     let area = [];
//     let circumference = [];
//     let diameter = [];
//     for( let i = 0; i < radius.length ; i++){
//         area.push(Math.PI * radius[i] * radius[i]);
//         circumference.push(2 * Math.PI * radius[i]);
//         diameter.push(2 * radius[i]);
//     }
//     console.log(area, circumference, diameter);
// }
// calculate(radius);


//Another way, functional programming
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
