function a(){
    var b = 10;     //2) Also apply debugger here
    c();
    function c(){
        console.log(b); //3) Put debuger here, and see 'call stack' and 'scope' in inspect-> sources
    }
}

a();     //1) apply debugger here