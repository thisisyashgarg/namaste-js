import fetch from 'node-fetch'

// const car = ['shoes', 'pants', 'shirts'];

// createOrder(cart, function(orderId){
//     proceedToPayment();
// });  // control is given to create order api 

//PROMISE WAY (not exactly promise)
// const promise = createOrder(cart);
//this promise holds data in the form of empty object 
// and runs async, fills data, and then fires 'then'
// when filled with data, then callback is fired,
// thus we now have control over the createOrderAPI

// promise
// .then(function(orderId){
//         proceedToPayment();
// });


//ACTUAL PROMISE
const githubAPI = "https://api.github.com/users/thisisyashgarg";
const userData = fetch(githubAPI);
// console.log(userData);

userData
.then((res) => res.json())
.catch((err) => console.log(err));