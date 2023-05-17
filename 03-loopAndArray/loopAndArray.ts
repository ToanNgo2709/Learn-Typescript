let reviews: number[] = [5, 5, 4.5, 1, 2];
let total: number = 0;
let average: number = 0;

for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

average = total / reviews.length;

console.log(`total is: ${total}`);
console.log(`average is: ${average}`);

let sports: string[] = ['Golf', 'Cricket', 'Tennis'];
for(let sport of sports){
    if(sport == 'Cricket'){
        console.log(`my favorite ${sport}`)
    } else {
        console.log(`nah ${sport}`)
    }
}

sports.push("Baseball");
sports.push("Football");

for(let sport of sports){
    console.log(sport);
}
