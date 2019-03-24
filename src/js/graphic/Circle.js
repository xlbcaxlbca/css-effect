import Shape from "./Shape";
export default class Circle extends Shape{
    constructor(){
        super();
        console.log("circle.constructor",this);
    }

    setName(){
        console.log("circle.setName", this.color,super.color, super.getColor);
        console.log(`super.myName is :${super.myName}`)
    }

    getAge(){
        console.log("circle.getAge");
        getMyAge();
    }
}

//私有方法，放在calss之外，外部无法调用
function getMyAge(){
    console.log("circle.getMyAge");
}


