let a=20// global variable accesed everywhere
function add(b){
    console.log(a+b);
    let c=30;//local variable accesible in the scope defined
    console.log(a+b+c)
}
add(20);
function greet(){
    let hello="hey"
    function talk(){
        let greeting="hello there"
        console.log(`${hello}${greeting}`)
    }
    talk()
    
    // console.log(greeting)
}
greet()