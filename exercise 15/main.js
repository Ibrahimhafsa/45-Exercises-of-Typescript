var guestList = ["Hafsa", "Jaweria", "Saad", "Musab"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Ahh sakti");
guestList.splice(0, 1, "Ali");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
