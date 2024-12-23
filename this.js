const user={
    username:"hitesh",
    price:666,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to my website`)
        console.log(this)
    }
}
//user .welcomeMessage()
// user.username ="singhjii"
// user .welcomeMessage()

 //console.log(this)

//  function tullu(){

//     const username="bulbulsingh"
//     console.log(this.username);
//  }
//  tullu()


// Arrow function


// const chai= ()=>{
//     let username="krishna"
//     console.log(this)
// }
// chai()

// const addtwo=(num1,num2)=> {
//     return num1 +num2
// }

//const addtwo=(num1,num2)=>  num1 +num2
//const addtwo=(num1,num2)=>  (num1 +num2)

const addtwo=(num1,num2) =>({username:"krishna"})



console.log(addtwo(3,4))

