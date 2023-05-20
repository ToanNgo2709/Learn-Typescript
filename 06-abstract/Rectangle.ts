import { Shape } from "./Shape";

export class Rectangle extends Shape {

    calculateArea(): number {
        return this._width * this._height;
    }

    private _height: number;
    
    private _width: number;

    constructor(theX: number, theY: number, theWidth: number, theHeight: number){
        super(theX, theY);
        this._height = theHeight;
        this._width = theWidth;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }

    getInfo(): string {
        return super.getInfo() + `, witdth: ${this._width}, length: ${this._height}`;
    }
    
}