const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1, 1001));

const user = {
    name: "Ryan",
    cities: ["Flagstaff", "Minneapolis", "Eau Claire"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());