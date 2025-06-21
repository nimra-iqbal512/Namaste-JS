// // == Block Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a); //Program no further execute, after reference error is thrown
// console.log(b);
// console.log(c);


// // ==  Shadowing
// // var a = 10;
// // {
// //     var a = 100;
// //     console.log(a); //10
// // }
// // console.log(a);     //10


// // // == When var is outside the block, and let and const are inside the block with same variable name
// // var a = 10;     // Apply debugger here
// // {
// //     // let a = 100;
// //     let a = 100;
// //     console.log(a); //100, then also apply debugger here
// // }
// // console.log(a);     //10


// // // // == When let, const outside the block, and var inside the block with same variable name
// // let a = 10;
// // {
// //     var a = 100;
// //     console.log(a);
// // }
// // console.log(a);


// === Continue
// let b = 100;
// {
//     let b = 50;
//     console.log(b);
// }
// console.log(b);


// var x = 50;
// {
//     let x = 70;
//     console.log(x);
// }
// console.log(x);


// var x = 50;
// {
//     let x = 70;
//     console.log(x);
//     {
//         let y = 80;
//         console.log(y);
//     }
// }
// console.log(x);


// const c = 100;
// {
//     const c = 50;
//     console.log(c);
// }
// console.log(c);


// const c = 100;
// function x(){
//     const c = 50;
//     console.log(c);
// }
// console.log(c);
// x();


// == Illegel Shadowing

// // Invalid
// let a = 20;
// {
//     var a = 20;
// }

// // Valid
// let a = 20;
// function x(){
//     var a = 20; //Now x is in separate scope. Its scope is function level.
// }

// // Valid
// let a = 20;
// {
//     let a = 20;
// }

// // Valid
// var a = 20;
// {
//     let a = 20;
// }


// == Lexical Scope
const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a); //It tries to access the nearest a
    }
    console.log(a);
}
console.log(a);
