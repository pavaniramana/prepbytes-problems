// console.log("Hello");

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

// function conditioncheck (a,b) {
//     if(a%10==0 && b%10==0) {
//         console.log("true");
//     }
//     else if(a%10==0 || b%10==0){
//         console.log("true");
//     }
//     else{
//         console.log("False");
//     }

// }
// conditioncheck(12,20)

// function lengthnum (a,b,c) {
//     const d = a+b+c
//     console.log(d);
//     const e = (d/300)*100
//     console.log(e);
// }
// lengthnum(50,20,100)


// function calculator  (a,b) {
//     switch (calculator) {
//         case '+':
//             console.log(a+b)
//             break;
    
//         default:
//             // console.log("hello");
//             break;
//     }
// }
// calculator(1,2)


function checkdivisiblity(a) {
    if(a%6==0 &&a%9==0 ) {
        console.log("divisible by two");
    }
    else{
        console.log("not divisible by two");
    }
}
checkdivisiblity(36)