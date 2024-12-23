let myheros=["thor","spiderman"]

let heropower={
    thor :"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman }`)
    }
    

    }

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}
Array.prototype.heykrishna=function(){
    console.log('hare rama hare krishna');
}

//heropower.hitesh()
myheros.hitesh();
myheros.heykrishna();
//heropower.heykrishna();

const user ={
    name:"krishna",
    email:"krishu@gmail.com"
}

const teacher ={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false    
}

const TAsupport={
    makeAssignment:"PAATHSHALA Assignment",
    fulltime:true,
    __proto__:TeachingSupport
}

teacher.__proto__=user


//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherusername ="singhshab       "
String.prototype.trueLength= function(){
    console.log(`${this}`);
   // console.log(`${this.name}`); phle hota tha ab nhi
   console.log(`true length is: ${this.trim().length}`);
}

anotherusername.trueLength()
"wlcmtobhumiharcity".trueLength()
"ramanandsingh".trueLength()

