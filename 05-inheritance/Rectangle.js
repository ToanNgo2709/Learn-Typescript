"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, theWidth, theHeight) {
        super(theX, theY);
        this._height = theHeight;
        this._width = theWidth;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    getInfo() {
        return super.getInfo() + `, witdth: ${this._width}, length: ${this._height}`;
    }
}
exports.Rectangle = Rectangle;
