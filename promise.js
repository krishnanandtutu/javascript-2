const promiseone= new Promise( function(resolve,reject){
    //Do an async task
    // DB calls, cryptography,network calls

    setTimeout(function(){
        //console.log('Async task is completed');
        resolve()
    },1000)
})
  
promiseone.then(function(){
    //console.log("promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    //console.log("Async 2 resolved")
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"lullu@example.com"})
    },1000)
})

promisethree.then(function(user){
    //console.log(user)
})

const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve ({ username:"krishna",password:"545"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
 

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log(" The Promise is either resolved or rejected")
})


const promisefive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve ({ username:"singh",password:"545"})
        }
        else{
            reject('ERROR: chinese went wrong with Army')
        }
    },1000)
})

// async function consumePromiseFive(){
//     const response = await promisefive
//     console.log(response);
// }

async function consumePromiseFive(){

    try{
         const response = await promisefive
         console.log(response);
    }
    catch(error){
          console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);   
//      }   
//       catch(error){
//           console.log(error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error));

