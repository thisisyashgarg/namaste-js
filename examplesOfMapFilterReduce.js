const users = [
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 57 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
    { firstName: "shahrukh", lastName: "khan", age: 57 },
];


// get fullnames of all users
console.log(users.map(x => x.firstName + ' ' + x.lastName));


//get ages in an object 
//{57 : 2, 26: 1, 75 : 1}

const output = users.reduce((acc, curr) => {
     if(acc[curr.age]){
        acc[curr.age]++;
     }
     else{
        acc[curr.age] = 1;
     }
     return acc;
}, {})
console.log(output);


//get first name of users with age less than 60
const output2 = users.filter(x => x.age < 60).map(x => x.firstName);
//chaining can also be done
console.log(output2);

//same thing using reduce
const ans = users.reduce((acc, curr) =>{
     if(curr.age < 60){
        acc = curr.firstName + ' ' + acc;
     }
     return acc;
}, [])
.split(' ');

