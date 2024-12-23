
const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings ="Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

//console.log(map);

for(const [key,value] in map){
    console.log(  key,':-' ,value);
}

// const myobject= {
//     game1 :'Nfs',
//     game2 :'spiderman'
// }
// for(const [key,value] of myobject){
//     //console.log(  key,':-' ,value);
// }

//console.log(  key,':-' ,value);
//
// in case of object we forin loop in place of forof loop
const finalobject ={
    js:'javascript',
    cpp:'c++',
    rb:"rubby",
    swift:"swift by apple"

}

for( const key in finalobject){
    //console.log(key);
    //console.log(finalobject[key]);
    //console.log(`${key} shoetcut is for ${finalobject[key]}`);
}

const myarray =["js","rb","py","java","cpp"]

for (const key in myarray) {
   // console.log(myarray [key]);
}

myarray.forEach(function (val){
    //console.log(val);
})
myarray.forEach((item)=>{
   // console.log(item);
})

function printme(item){
    //console.log(item);
}
myarray.forEach(printme);

myarray.forEach((item ,index,arr) =>{
       //console.log(item,index,arr);
})
 const myarmy=[
    {
        name:"army",
        batalion:"gorkha"
    },
    {
        name:"airforce",
        batalion:"fighter"
    },
    {
        name:"navy",
        batalion:"marcos"
    }

 ]

 myarmy.forEach((item)=>
 {
   //console.log(item.name);
 });

 const values= myarray.forEach((item)=>{
      //console.log(item)
    //   return item  // for Each loop return nothing
 })

 //console.log(values);

 const mynums =[1,2,3,4,5,6,7,8,9,10]

//  const newnums =mynums.filter((num)=> 
//     num>4// curly braces agr  aap laga dete ho to aapko return  keyword likhna hi pdega

//  )

// const newnums =mynums.filter((num)=>{ 
//     return num>4
// })
// console.log(newnums);

const newnums =[]

mynums.forEach( (num) =>{
    if (num>4){
        newnums.push(num)
    }
})
//console.log(newnums);


const books =[
    { title:" book one ", genre :'fiction',publish :1981,
    edition:2006

    },
    {
        title:" book two ", genre :'fiction',publish :1986,
        edition:2005
    },
    {
        title:" book three ", genre :'science',publish :1989,
        edition:2015
    },
    {
        title:" book four ", genre :'  non-fiction',publish :1985,
        edition:2012
    },
    {
        title:" book five ", genre :'history',publish :1996,
        edition:2003
    },
    {
        title:" book six ", genre :'fiction',publish :1923,
        edition:2020
    },
    {
        title:" book seven ", genre :'science',publish :1947,
        edition:2014
    }
];

let userbooks = books.filter( (bk) => bk.genre === 'fiction')

userbooks = books.filter( (bk) =>{ return bk.publish >=1920})

//console.log(userbooks);

const mynumbers =[1,2,3,4,5,6,7,8,9,10]

//const newvalue= mynumbers.map( (num) => { return num+10})

 //console.log(newvalue);

 const final= mynumbers
                   .map((num) => num*10)
                   .map(num => num+1)
                   .filter( (num) => num >=40)

 //console.log(final);  
 
 const mynumber =[1,2,3]

//  const mytotal = mynumber.reduce( function(acc,currval){
//       console.log(`acc :${acc} and currval: ${currval}`);
//       return acc +currval
//  },0)

 //console.log(mytotal);

 const mytotal=  mynumber.reduce(( acc ,curr)=> acc +curr ,0)
 //console.log(mytotal);

 const shoppingcart=[
    {
        itemname:"js curse",
        price:2999
    },
    {
        itemname:" python",
        price:999
    },
    {
        itemname:" mob dev course ",
        price:5499
    },
    {
        itemname:" data science course ",
        price:12999
    }
 ]

 const pricetopay = shoppingcart.reduce( (acc, item) => acc +item.price ,0)


 console.log(pricetopay);