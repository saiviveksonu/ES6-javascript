// destructuring assignments
let a,b;
[a,b]=[100,200];
console.log(a);
console.log(b);
// 
[a,b,...rest]=[100,200,300,400,500];
console.log(a);
console.log(b);
console.log(rest);
// doing this with objects
({a,b}={a:100,b:200,c:300,d:400,e:500});
console.log(a);
({a,b,...rest}={a:100,b:200,c:300,d:400,e:500});
// this returns the objects 
console.log(rest);
// array destructing
// we created an array
const players=['virat','jadeja','ashwin','shami'];
// assigned this values to the array of variables
const [person1,person2,person3,person4]=players;
console.log(person1,person2,person3,person4);
// parse array returned from function
function getpeople(){
    return ['virat','jadeja','ashwin','shami']
}
let person5,person6,person7,person8;
[person5,person6,person7,person8]=getpeople();
console.log(person5,person6,person7,person8);
// object destructuring
const person={
    name1:'saivivek',
    age:23,
    city:'kamareddy',
    gender:'male',
}
const{name1,age,city,gender}=person;
console.log(name1,age,city,gender);




