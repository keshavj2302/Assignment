var users = [
    {
        "name": "Akhil",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Nagarkat road",
            city: "Pune",
            state: "Maharashtra"
        },
        occupation: "Engineer",
        company: "Reliance Jio"
    },
    {
        "name": "Rohit",
        dateOfBirth: "1988-10-05T14:48:00.000Z",
        address: {
            hno: "37b",
            city: "Kolkata",
            state: "West bengal"
        },
        occupation: "Doctor",
        company: "Jipmer"
    },
    {
        "name": "Shanmuk",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Tech Market",
            state: "Haryana"
        },
        occupation: "Software Engineer",
        company: "Google inc"
    },
]




/*
Input Object: 
{
        "name": "Akhil",
        dateOfBirth: "2001-10-05T14:48:00.000Z",
        address: {
            hno: 104,
            street: "Nagarkat road",
            city: "Pune",
            state: "Maharashtra"
        },
        occupation: "Engineer",
        company: "Reliance Jio"
    }

Return the following
{
    userName: "Akhil",
    age: 20,
    userAddress: "104 Nagarkat road, Pune, Maharashtra",
    profile: "Engineer | Reliance Jio"
}

*/
const getUserInfo = (obj) => {
    let ageInMillis = Date.now() - new Date(obj.dateOfBirth);   //Age in millisec
    let age = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));    //Math.floor to remove decimals in age
    let add = obj.address;
    let address = add.hno + " " + add.street + " " + add.city + " " + add.state;
    let profile = obj.occupation + " | " + obj.company;
    // Returning the userInfo as an object
    return {
        userName : obj.name,
        Age : age,
        userAddress : address,
        profile : profile
    };
}


/*
Loop through users array and prints(console.log) userInfo object for eact user element
*/
const printAllUserInfo = () => {
    for(let eachUser of users){
        console.log(getUserInfo(eachUser)); //Printing all user one by one
    }

}
printAllUserInfo();     // For testing purpose only