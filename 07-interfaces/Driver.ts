import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cc: CricketCoach = new CricketCoach();
let gc: GolfCoach = new GolfCoach();


let coaches: Coach[]= [];
coaches.push(cc);
coaches.push(gc);

for(let coach of coaches) {
    console.log(coach.getDailyWorkout());
    console.log("----------------------");
}
