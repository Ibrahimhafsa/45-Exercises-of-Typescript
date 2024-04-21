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

// Inform that only two guests can be invited for dinner
console.log("Unfortuenately, the new dinner table wont arrive on time so I can only invite two Guests to dinner with me");

// Using while-loop to remove guests from the array until two names remain 
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
// Sending a Invitations to the last two Guests on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);
