"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let coaches = [];
let cc = new CricketCoach_1.CricketCoach();
let gc = new GolfCoach_1.GolfCoach();
coaches.push(cc);
coaches.push(gc);
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
    console.log("----------------------");
}
