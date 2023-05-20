import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 15, 20);

let theShapes : Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log("------------------------")
}




