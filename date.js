// let mydate= new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString())
// console.log( typeof mydate);

// // let mycreatedDate =new Date(2023,2,15,5,3)
// //console.log(mycreatedDate.toLocaleString());
// //let mycreatedDate =new Date("2023-01-23")
// let mycreatedDate =new Date("02-25-2023")


// console.log(mycreatedDate.toLocaleString());

// let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());
console.log(newDate.toLocaleString());

 console.log(`${newDate.getDay()} and the time`);//`${newDate.getDay()} and the time`
  console.log( newDate.toLocaleString('default',{
    weekday:"long",
  })
  );

