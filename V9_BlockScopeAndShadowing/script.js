// == Block Scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //Program no further execute, after reference error is thrown
console.log(b);
console.log(c);


// ==  Shadowing
// var a = 10;
// {
//     var a = 100;
//     console.log(a); //10
// }
// console.log(a);     //10


// // == When var is outside the block, and let and const are inside the block with same variable name
// var a = 10;     // Apply debugger here
// {
//     // let a = 100;
//     let a = 100;
//     console.log(a); //100, then also apply debugger here
// }
// console.log(a);     //10


// // // == When let, const outside the block, and var inside the block with same variable name
// let a = 10;     
// {
//     var a = 100;
//     console.log(a); 
// }
// console.log(a);     