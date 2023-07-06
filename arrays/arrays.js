let items=[2,5,"sweet",false,45];
// Array methods
items.push(62);
console.log(items);
items.unshift(6.5);
console.log(items);
items.pop();
console.log(items);
//start of arrays
items.shift();
console.log(items);

let num=[1,9,34,12,25,30];
let sorted =num.sort((a,b)=>a-b);
console.log(num);
// Given an array of x elements ,return an array of each element in x multiplied by 2
const result= num.map(
    (item)=>{
        return item*2
    }
)
console.log(result);
console.log(result);
let a = [1,2,3];
let b =[4,5,6];
let joined1=a.concat(b);
console.log(joined1);
let c =[1,...a];
//destructing
// console.log({c});
// let [z,x,...e]=c;
// console.log(z);
// console.log(x);
// console.log(e);

