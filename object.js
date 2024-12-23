// singleton


//object literals

/*const mysym= Symbol("key")

const jsuser={
    name:"krishna",
    "full name":"singhshab",
    age:20,
    //mysym :"mykey1",
   [ mysym]:"key1",
    location :"patna",
    email:"krishnasingh@gmail.com",
    isLoggedIn:false,
    workingDays:["monday","thursday"]

}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])
// console.log( typeof mysym)


// jsuser.email="krishnalullu@gmail.com"
// console.log(jsuser.email)
// Object.freeze(jsuser)
// jsuser.email="krishnathullu@gmail.com"
// console.log(jsuser)

// jsuser.greeting= function(){
//     console.log("hello this is singh zone");
// }

// jsuser.greetingnew= function(){
//     console.log(`hello this is singh zone, ${this.age}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingnew());*/

// object 02 more details about object lets get started



//const tinderuser= new Object()

const tinderuser={}

tinderuser.Id="12345hfgg"
tinderuser.name="rechuhba"
tinderuser.isLoggedin =false
//console.log(tinderuser);

const regularuser={
    email:"rmamu@gmail.com",
    fullname:{
       userfullname:{
          firstname:"samarsingh",
          lastname:"sahilsingh"
       }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}

 //const obj3={obj1,obj2}

 //const obj3=Object.assign(obj1,obj2)
 //const obj3=Object.assign( {},obj1,obj2)

 const obj3={...obj1,...obj2}
 console.log(obj3);

 const users=[
     {
        id:1,
        email:"k@gmail.com"
   },  
     {
    id:1,
    email:"k@gmail.com"
}
 ]

 users[1].email

//  console.log(tinderuser);
//  console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser));
//  console.log(Object.entries(tinderuser));
//  console.log(tinderuser.hasOwnProperty('isLogged'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"krishna"
    

}
// course.courseInstructor  bar bar use krna odd feel higa 

// second method
 const{courseInstructor:tutor}= course

 //console.log(courseInstructor);
console.log(tutor);

// destructuring
const navbar =({company}) =>{

}

navbar(company ="krishna")

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price": "free"
// }

// 
[
    {},
    {},
    {}
]



