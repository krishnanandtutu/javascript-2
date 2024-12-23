class User{
    constructor(email,password){
        this .email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    get password(){
       // return this._password.toUpperCase()
       return `${this._password}krishu`
    }

    set password(value){
        this._password=value
    }
}

const krishna =new User("krishu@gmail.com","abc")
console.log(krishna.email);