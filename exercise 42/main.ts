// Define the function to show magicians names
function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magiciaions great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians names
let magicians_names = ["Harry Poter", "Hafsa", "Ali"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// Call show_magicians that show modified list of magicians
console.log(great_magicians);

show_magician(great_magicians);