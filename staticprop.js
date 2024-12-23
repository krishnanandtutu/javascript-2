class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
      static createId(){
        return "123"
    }
}

const newuser = new user("singhkrishna")

 //console.log(newuser.createId());

 class Teacher extends user{
    constructor( username,email){
        super(username);
        this.email= email
    }
 }

 const realme = new Teacher("realme","real@me.com")

 //realme.logMe()
 console.log(realme.createId())

