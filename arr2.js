const me=["atish","krishna","abhijeet","ayushman"]
const you=["aditya","rohit","gautam"]

// me.push(you)
// console.log(me);
// console.log(me[4][2]);

 const they=me.concat(you)
//console.log(they);

// const final =[ me,you]
// const final1 =[ ...me,...you]
// console.log(final);
// console.log(final1);

// const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realanotherarray=anotherarray.flat(-1)

// console.log(realanotherarray);

console.log(Array.isArray("krishna"))
console.log(Array.from("krishna"));
// one interesting case
console.log(Array.from( {name:"krishna"}));

let score1=100;
let score2=200;
let score3=300;
const arr=[1,2,34,65]

console.log(Array.of(score1,score2,score3,arr));



