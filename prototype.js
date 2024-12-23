function multipleby5(num){
    return num*5
}

multipleby5.power=2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai =   new createuser("chai",25)
const tea=  new createuser("tea",250) 
 
 chai.printMe()
 tea.printMe()
