// =========== call Stack
var x = 7;
function getNmae() {
    console.log('Nimra');   //Apply debugger at this point to see call stack in 'Sources'
}

getNmae();
console.log(x); //Here we'll see only global execution context in call stack
console.log(getNmae);

//Call stack becomes empty after last line of code being get executed.