// Define a function to print each magician name of an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_names = ["Harry Poter", "Hafsa", "Ali"];
// Call the function to print each magician name
show_magicians(magician_names);
