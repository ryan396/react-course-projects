"use strict";

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1, 1001));

var user = {
    name: "Ryan",
    cities: ["Flagstaff", "Minneapolis", "Eau Claire"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
