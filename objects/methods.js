let student={
    name:"Stephen",
    age:19,
    greet:function(){
        console.log("Hello")
        console.log(`Hello my name is ${student.name}and i am ${student.age}`)
        console.log(`Hello my name is ${this.name}and i am ${this.age}`)
    }
}
student.greet();
student.talk=() => {
    console.log("Hello There")
    console.log(student.name)
};
student.talk();
