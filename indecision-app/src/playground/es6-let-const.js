var nameVar = "Ryan";
//can redeclare, can get sticky in apps
nameVar = "awdawd";
console.log('nameVar', nameVar);

let nameLet = "Jen";
//can't redeclare
nameLet = 'Ryan';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

// block scoping

var fullName = "Ryan Horstman";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName)
}