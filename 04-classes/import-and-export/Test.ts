import { People } from "../access-modifier/People";
import { Entity } from "../constructor-parameter-properties/Entity";

let myPeople = new People("test", "people");
let myEntity = new Entity("test", "entity");

console.log(myPeople.firstName);
console.log(myPeople.lastName);

console.error("--------------------------------");

console.log(myEntity.firstName);
console.log(myEntity.lastName);