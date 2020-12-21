// Завдання по JS:

 //1. Create array of 7 users with age and name fields
 let users = [
    {name: "Nazar", age: 14},
    {name: "Anna", age: 33},
    {name: "Max", age: 16},
    {name: "Nazar", age: 20},
    {name: "Igor", age: 25},
    {name: "Taras", age: 23},
    {name: "Krystyna", age: 18},
  ];

        // Write code that filters users by next criteria:     a) age < 18; 
    for (let i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
       console.log("users with age less than 18:", users[i]);
    }
   }
        // Write code that filters users by next criteria: b) age from range [18, 35];
   for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].age <= 35) {
        console.log("user with age 18-35:", users[i]);
    }
   }
        // Write code that filters users by next criteria: c) age > 35
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 35) {
            console.log("user with age over 35:", users[i]);
        }
        else {
            console.log("user with age over 35 not found");
        }
       }

            // Using the arrays
     let youngestUsers = [];
     let olderUsers = [];
     let oldestUsers = [];
         // Write code that filters users by next criteria: a) age < 18; b) age from range [18, 35]; c) age > 35
    for (let i = 0; i < users.length; i++) {
        if (users[i].age < 18) {
            youngestUsers.push (users[i]);
        }
        else if (users[i].age >= 18 && users[i].age <= 35) {
            olderUsers.push (users[i]);
        }
        else if (users[i].age > 35) {
            oldestUsers.push (users[i]);
        }
   }
      console.log("users with age less than 18:", youngestUsers);
      console.log("user with age 18-35:", olderUsers);
      console.log("user with age over 35:", oldestUsers);

            // Using the functions

    // Write code that filters users by next criteria:     a) age < 18;
    const users18 = users.filter(function (e) {
      return e.age < 18;
        });
    console.log("users with age less than 18:", users18);

    // Write code that filters users by next criteria: b) age from range [18, 35];
    const users18_35 = users.filter(function (e) {
        return e.age >= 18 && e.age <= 35;
          });
    console.log("user with age 18-35:", users18_35);

    // Write code that filters users by next criteria: c) age > 35
    const users35 = users.filter(function (e) {
        return e.age > 35;
    });
    console.log("user with age over 35:", users35);

//2. Write code that counts 2 to power 23 (піднести 2 до 23 степені, так як 2 у квадраті - 2*2, 2 в кубі - 2*2*2, а це до 23 степені)
    
    // Using the iteration whith "for" statement
    let result = 1;
    for (let i = 0; i < 23; i++) { 
        result *=2;
    console.log("2 to power", i+1, "=", result);
    }

    // Using the function for any number and "while" statement
    function exponent (base, power) {
        let i = 0
        let result1 = 1;
        if (power === 0){
          return 1;
        }
        while (i < power){  
          result1 *= base;
          i += 1;
        }
        return result1;
      }
  console.log (exponent (2,23))