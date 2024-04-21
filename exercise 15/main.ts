let guestList = ["Hafsa", "Jaweria", "Saad", "Musab"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Ahh sakti");

guestList.splice(0, 1, "Ali");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
