// Creating a Array
let userNames = ["Saad", "Ali", "Uzair", "Admin", "Hasnain"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})