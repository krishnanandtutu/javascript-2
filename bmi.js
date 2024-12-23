const form =document.querySelector('form');
// this usecase will give yoy emoty
// const height = parseInt(document.querySelector('#height').value)


form .addEventListener('submit', function(e){
    e.preventDefault();

    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');
    const result2= document.querySelector('#result2');

    if(height === '' || isNaN(height)){
        results.innerHTML='please  enter a valid height ';
    }
    else if(weight === '' || isNaN(weight)){
        results.innerHTML='please  enter a valid weight ';
    }
    else{
        const bmi= (weight/((height*height)/10000)).toFixed(2);
        // shiwing the result
        results.innerHTML=`<span>${bmi}</span>`;
        if(bmi < 18.5){
            //console.log('hi ')
            result2.innerHTML=` you are under weight`
        }
        else if ( bmi  >18.5 &&  bmi <29.5 ){
            result2.innerHTML=` you are healthy weight`
        }
        else {
            result2.innerHTML=` you are over weight`
        }
    }
    // if(bmi < 18.5){
    //     console.log('hi ')
    //     result2.innerHTML=` you are under weight`
    // }
    // else if ( bmi  >18.5 &&  bmi <29.5 ){
    //     result2.innerHTML=` you are healthy weight`
    // }
    // else {
    //     result2.innerHTML=` you are over weight`
    // }
    
});