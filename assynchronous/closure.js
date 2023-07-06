const add=(a)=>{
    let num=20
    const subtract=(b)=>{
        return num-5-b+5
    }
    return subtract
}
let num=add(50)
console.log({num})
console.log(num(25))