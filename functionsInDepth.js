var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 2;
    console.log(x); // this finds x in local memory space
}

function b(){
    var x = 3;
    console.log(x); // this finds x in local memory space
}