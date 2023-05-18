"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
var People = /** @class */ (function () {
    function People(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(People.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return People;
}());
exports.People = People;
var people = new People("toan", "ngo");
console.log(people.firstName);
console.log(people.lastName);
