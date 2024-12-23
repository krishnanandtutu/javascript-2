const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

 //console.log(descripter)
// console.log(Math.PI);
//Math.PI =5;
//console.log(Math.PI);

const chai ={
    name:"adrak ki chai",
    price:500,
    isAvailable:true,

     orderchai:function(){
        console.log("chai nhi bni");
     }
}

//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})


//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//for( let [key,value] of chai){   chai i:e the object we made is directlt not iterable
for( let [key,value] of Object.entries(chai)){

    if(typeof value !=='function'){
        console.log(`${key},${value}`);
    }
    
}
