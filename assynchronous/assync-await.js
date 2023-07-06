let success=true
let promise=new Promise((resolve,reject)=>{
    if (success){
        setTimeout((=>{resolve}))
        resolve("I am successful")
    }
    else{
        reject("i am still looking")
    }

}).then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will upskill");})
.finally(()=>{console.log("i am worthy");})
const student=assync()=>{
    let result=await promise
    console.log(result)
}
student()

