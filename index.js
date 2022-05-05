console.log("Hello");

// function sum (a,b){
//     let add = a+b
//     return add
// }
// const value = sum (2,5)
// console.log(value);


// function checkcondition (a,b) {
//     if(a<10 && a>b){
//         console.log("True")
//     }
//     else{
//         console.log("false");
//     }
// }
// checkcondition(5,3)

function conditioncheck (a,b) {
    if(a%10==0 && b%10==0) {
        console.log("true");
    }
    else if(a%10==0 || b%10==0){
        console.log("true");
    }
    else{
        console.log("False");
    }

}
conditioncheck(12,20)