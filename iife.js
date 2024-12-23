// immedidaiately invoked function(IIFE)

(function chai (){
 console.log(`DB connected`);
})();

( ( name) =>{
   console.log(`DB connnected two ${name}`);
})("krishna")


 const useremail =[];

// falsy valuees

//false,0,-0,Bigint 0n,"" , null,undefined,NaN  

// trythy values
// "0",'false'," ",[],{},function (){}

if(useremail.length ==0){
   console.log("Array is empty");
}

const emptyobj={}
if(Object.keys(emptyobj).length ===0){
   console.log(" object is empty")
}

// Nullish coalescing operator (??): null undefined

let val1;
 //val1 = 15 ?? 25
// val1= null ?? 10
//val1 = undefined ?? 20
val1 = null?? 13 ?? 25


 console.log(val1);