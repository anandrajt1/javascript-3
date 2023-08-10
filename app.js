// in console

// let a=prompt('enter the first no')
// let b=prompt('enter the 2nd no')

// function large(a,b){
//     if(a>b){
//         console.log('larger no is '+a)
//     }
//     else{
//         console.log('larger no is '+b)
//     }
// }
// large(a,b);

// USER INTRACTION



document.getElementById('btn').onclick=function(){
    let a=document.getElementById('inp1').value;
let b=document.getElementById('inp2').value;
    if(a>b){
        document.getElementById('result').innerHTML= 'larger number is '+a
    }
    else{
        document.getElementById('result').innerHTML= 'larger number is '+b
    }

    document.getElementById('inp1').value=""
    document.getElementById('inp2').value=""

    
}