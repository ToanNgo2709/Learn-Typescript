export abstract class Shape {

    constructor(private _x: number, private _y: number) {
        this._x = _x;
        this._y = _y;
    }

    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }

    getInfo() : string {
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;

}