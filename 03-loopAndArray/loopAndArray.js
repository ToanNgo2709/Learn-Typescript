var reviews = [5, 5, 4.5, 1, 2];
var total = 0;
var average = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
average = total / reviews.length;
console.log("total is: ".concat(total));
console.log("average is: ".concat(average));
var sports = ['Golf', 'Cricket', 'Tennis'];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == 'Cricket') {
        console.log("my favorite ".concat(sport));
    }
    else {
        console.log("nah ".concat(sport));
    }
}
sports.push("Baseball");
sports.push("Football");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    console.log(sport);
}
