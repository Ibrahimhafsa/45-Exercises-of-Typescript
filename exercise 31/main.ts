let userNames = ["Ali", "Saad", "Uzair", "Admin", "Hasnain"];

userNames = []


if (userNames.length === 0){
    console.log("your Array is Empty We need to find users!");
}else{
    // Using ForEach Loop on Array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})
}
