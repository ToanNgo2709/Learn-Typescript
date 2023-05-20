import { Shape } from "./Shape";

export class Circle extends Shape {
    private _radius: number;

    constructor(theX: number, theY: number, theRadius: number){
        super(theX, theY);
        this._radius = theRadius;
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius: ${this._radius}`;
    }
    
}