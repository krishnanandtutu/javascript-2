class user {
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;

        
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai= new Teacher("chai","chai@teacher.com","123")

chai.addcourse();

const masalachai= new user("masalachai")

masalachai.logMe();
chai .logMe();

//console.log(chai === masalachai)
//console.log(chai ===Teacher);
//console.log(chai instanceof Teacher );
console.log(chai instanceof user );