let a=10
// const b=12
//var c=155


if(true){ 
    let a=100
    const b=12
    var c=15

    console.log(a);
}
//console.log(a);
//console.log(b);
  //console.log(c);

  function one(){
    const username="hitesh"

    function two(){
        const website ="yputube"
        //console.log(username);
    }
    //console.log(website);

    //two()
  }
  one()


  if (true){
    const username="krishna"
    if(username === "krishna"){
        const website="snapchat"
        //console.log(username+website);
    }
    //console.log(website);
  }
  //console.log(username);

  console.log(addone(5));

  function addone(num){
    return num+1
  }
   //console.log(addone(5));

   console.log(addtwo(5));// it will gives error

  const addtwo= function(num){
    return num+2
  }
   //console.log(addtwo(5));



