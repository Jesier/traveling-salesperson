const weeklyMiles = [2, 3, 2, 1, 4, 5, 3]
let totalMiles = 0

for (const mile of weeklyMiles) {
    totalMiles += mile
}

const averageMiles = totalMiles / weeklyMiles.length

console.log (`i average ${averageMiles} miles each week. I have walked a total of ${totalMiles} miles.`)