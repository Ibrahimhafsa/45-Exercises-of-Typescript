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

// Making a copy of Original array through .Slice() function
let copy_magicians_names = magicians_names.slice();

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays Original and Copied

// Original
console.log("Original Array\n");
show_magician(magicians_names);

// Copied
console.log("\nCopied Array\n");
show_magician(copy_great_magicians);

