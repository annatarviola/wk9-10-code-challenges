function numOfYrs(p0, percent, aug, p) {
    let growthRate = percent * 0.01;
    let year = 0;
    let pop = p0;

    while (pop < p) {
        pop = pop + pop * growthRate + aug;
        pop = Math.trunc(pop);
        year++;
    }

    return year;
};

// function numOfYrs(p0, percent, aug, p) {
//   for (var year = 0; p0 < p; p++) {
//     p0 = p0 * (1 + percent / 100) + aug;
//   }
//   return year;
// }

console.log(numOfYrs(1500, 5, 100, 5000));
