var age = 11;
export default class Shape{
    myName = "shape===";
    constructor(){
        this.color = "shape";
        console.log("this.name", this.color);
    }
    getColor(){
        console.log("getColor")
        return "red";
    }
}