// Making a Array of Countries and Print its Original Order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the Array in reversed Order without modifying the Actual Array List  
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the Array to show that its back to its Original Order
console.log("Back to Original order:", countriesToVisit.reverse());

// Print the Array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
