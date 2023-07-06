let success=true
let promise=new Promise((resolve,reject)=>{
    if (success){
        resolve("I succeed")
    }
    else{
        reject("i am still looking for a job")
    }

}).then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will upskill");})
.finally(()=>{console.log("i am worthy");})

// let userData = [{id:1, name:"susan", age: 20},{id:2, name: "john", age: 16}]
// function gettingUserData(userId){
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       userData.filter(item => item.id == userId);
//       if(userData.length > 0){
//         resolve(userData);
//       }
//       else{
//         reject("user not found")
//       }
//     }, 2000)
//   })
// }





console.log({promise})
let userData=[{id}]
const getData=async(id)=>{
    for (let i of id){

    }
    let data=await userData(id);{
    console.log(data);
}
    return await userData(id)
}