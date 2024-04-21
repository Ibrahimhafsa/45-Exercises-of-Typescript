var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its Original Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// Print the Array in reversed Order without modifying the Actual Array List  
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
