const arr = [1, 2, 3, 4, 5];

//MAP
// function double(x){
//     return 2 * x;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);
// const output2 = arr.map((x) => x.toString(2));
// console.log(output);
// console.log(output2);

//FILTER

//filtering all the odd values
// const output = arr.filter((x) => x % 2);

// console.log(output);



//REDUCE
//can find single values from an array like sum or max, min

//finding sum 
const output = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(output);

//acc basically stores the value which is being calculated
//curr is the current element of array
//second parameter is the initial value of acc

//finding max

const output2 = arr.reduce((max, curr) =>{
    if (curr > max){
        max = curr;
    }
    return max;
}, 0);

console.log(output2);