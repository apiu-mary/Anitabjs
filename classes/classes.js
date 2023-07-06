class Person{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height
    }
    greet(){
        console.log("Hello");
    }
};
let person= new Person("Henry",25,"7ft");
console.log(person.greet());
class Robot extends Person{
    constructor(name,age,height){
        super(name,age,height);
    }
}
let robot=new Robot("Elsa",3,"5ft")
console.log(robot)
class CrazyRobot extends Person{
    constructor(name,age,height){
        super(name,age,height);
        this.walk=true
        this.weight="7ft"
        this.dominate=this.dominate
    }
    world(){
        console.log("I will ${this.dominate}the world")
    }
    
}

let crazy=new CrazyRobot("Elsa",4,"6ft")
crazy.world()
class LovingRobot extends CrazyRobot{
    constructor(name,age,height,dominate){
        super(name,age,height,dominate);
    }
}

let loving=new LovingRobot("Amanda",10,"5ft","love")
console.log(loving);