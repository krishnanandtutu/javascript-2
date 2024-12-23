function sayname(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}

sayname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 +number2);
// }
function addTwoNumbers(number1,number2){
//    let result =number1+number2
//    return result
    
     return number1+number2

}
  const result =addTwoNumbers(3,5)

  //console.log(" result is",result);

  function loginusermessage(username ="tutu"){

    // if(username === undefined){
        if(!username){
        //console.log("please enter a username first");
        return
    }
    return `${username} just logged in`
  }
   //console.log(loginusermessage("singh"))


   function calculateprice( val1,val2,val3,...num1){
    return num1
   }

   //console.log((calculateprice(200,201,203)))

   const user={
    username:"singhshab",
    prices:99
   }

   function handleobject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
   }

   //handleobject(user)
   handleobject({
      username:"tutu",
      price:10
   })

   // passing array to function

   const mynewarray=[10,20,30,40]

   function returnsecondvalue(getArray){
    return getArray[1]
   }
  // console.log(returnsecondvalue(mynewarray));
  console.log(returnsecondvalue([100,200,300,400]));
