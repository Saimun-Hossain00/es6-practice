const ages = [12, 13, 14, 15,23];
const ages2 = [15, 22, 24,];
const ages3 = [34, 26, 30, 18];

const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business1 = 589;
const business2 = 789;
const business3 = 478;
const takaPoisa = [589, 789, 478];

const maximum = Math.max(...takaPoisa);
console.log(maximum);