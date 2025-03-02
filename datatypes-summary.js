// primitive
// 7 types 
//String, Number, Boolean, null, undefined, symbol ,BigInt,

const Number= 100;
const Number1=100.4

const isloggedin= false
const outside = null;
let email;

const id1 = Symbol("1234")
const id2 = Symbol("1234")

console.log("id1",id1);
console.log("id2",id2);

console.log('id1 === id2',id1 === id2);
console.log(typeof Number );
console.log(typeof isloggedin );
console.log(typeof outside );
console.log(typeof email );
console.log(typeof id1 );



// Reference (non primitive)

// Array , Object,function,

const car = ["alto","tata",'neno']

let myobjec ={
    name: 'SRvasoya',
    age: 12,
}

const myfunction = function(){
    console.log("hello");
    
}
