// Creating a Guest List Array
let guestList = ["Hafsa", "Jaweria", "Saad", "Musab"];

// making variable for those guest who cant come
let dontCome = guestList[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakti hen");

// Add or Remove Values from Guest list Array 
guestList.splice(0, 1, "Ali");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new Guest at starting index of array
guestList.unshift("Uzair");

// Adding a new Guest at ending index of array
guestList.push("Zahra");

// Get a middle index of our guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Zain");

// Print Message of Updated List
console.log("updated List of our Guests");

// Sending a invitation message to our Guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));