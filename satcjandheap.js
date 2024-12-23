/// stack(primitive),Heap(Non-primitive)
 
  // stack based
//   let mychannel=" krishna"

//   let newname= mychannel
//   newname= "ramu"

//   console.log(newname)
//   console.log(mychannel)

   // heap based
    let user1={
        class:"cse",
        rollno:25
    }

    let user2= user1

    //console.log(user2)

    user2.rollno=29
    console.log(user2.rollno)
    console.log(user1.rollno)



