var x = 10;
a();
b();

function a() {
    var x = 20;
    console.log(x);
}

function b() {
    var x = 20;
    console.log(x);
}

// View all the three execution contexts in browser call stack. (1 Global execution context, and two local execution contexts for a() and b())
// Also in browser, see the memory allocated to all variables and functions in all three environments created. 