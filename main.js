/*
    Problem/output:
        Solar Eclipse Bank has a problem. They want to have an automated
        way to display the customer birthdays, for each month, for the
        next 10 years. They would like to see the customer's name, and their
        current age, displayed in the correct month. Here's an example they
        provided of how they would like the data displayed.

        2022
        "February"
        ---------------
        Miles Goodworth is n years old
        Barbara Forsythe is n years old

        2022
        "March"
        ---------------


        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/

// Define an array containing year integers
const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];

// Define an array for all month names as strings
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// Define an array of objects representing the customers
const customers = [
  {
    firstName: "William",
    lastName: "Johnson",
    id: 1,
    yearBorn: 1970,
    monthBorn: "June"
  },
  {
    firstName: "Halle",
    lastName: "Johnson",
    id: 2,
    yearBorn: 1988,
    monthBorn: "September"
  },
  {
    firstName: "Santina",
    lastName: "Veum",
    id: 3,
    yearBorn: 1994,
    monthBorn: "October"
  },
  {
    firstName: "Camylle",
    lastName: "Ward",
    id: 4,
    yearBorn: 1965,
    monthBorn: "June"
  },
  {
    firstName: "Paula",
    lastName: "Green",
    id: 5,
    yearBorn: 1983,
    monthBorn: "January"
  },
  {
    firstName: "Russel",
    lastName: "Bayer",
    id: 6,
    yearBorn: 1977,
    monthBorn: "July"
  },
  {
    firstName: "Jovan",
    lastName: "Gutmann",
    id: 7,
    yearBorn: 1999,
    monthBorn: "March"
  },
  {
    firstName: "Darrel",
    lastName: "Metz",
    id: 8,
    yearBorn: 1993,
    monthBorn: "December"
  },
  {
    firstName: "Eveline",
    lastName: "Feil",
    id: 9,
    yearBorn: 1978,
    monthBorn: "March"
  }
];

for (const year of years) {
  console.log(year)
  for (const month of months) {
    console.log(month)
    console.log("----------------")
    for (const customer of customers) {
      if (customer.monthBorn === month) {
        console.log(
          `${customer.firstName} ${customer.lastName} is  ${
            year - customer.yearBorn
          } years old`
        );
      }
    }
  }
}





/* 
  The owners of Joey's Pizza want your team to develop some software
  that allows employees to build customer pizzas with 2 toppings, at the
  right size, get it paid for, bake it, and then output a message that
  it is being delivered.

  The delivery message should only happen if the pizza has been paid for.




  Goals of the pizza project:
  ---------------------------
    1. Function for adding the toppings to the pizza
    2. Function that bakes a pizza
    3. Function that adds `size` property to pizza
    4. Function to mark the pizza as being paid for.
    5. Function that logs a "Your {pizza details} is being delivered".
          If pizza is not paid for yet, display "Please pay us first"
    6. Each function copies the input object and returns
          modified copy
*/

//create a function to add toppings to pizza

const addToppings = (a, b) => {
  const pizza = {
    toppings: [a, b]
  };
  return pizza;
};

let pizzaObj = addToppings("pineapple", "pepperoni");

//bake the pizza

const bakePizza = (pizza) => {
  pizza.baked = true;
  return pizza;
};

let bakedPizza = bakePizza(pizzaObj);

// add the pizza size

const pizzaSize = (size, pizza) => {
  const ourPizza = { ...pizza };
  ourPizza.size = size;
  return ourPizza;
};
const newPizza = pizzaSize(14, bakedPizza);
//console.log(newPizza);

//mark the pizza as being paid for
const pizzaPaid = (pizza, paid) => {
  const paidPizza = { ...pizza };
  paidPizza.paid = paid;
  if (paidPizza.paid === true) {
    console.log("paid");
  }
  return paidPizza;
};

const isPizzaPaidFor = pizzaPaid(newPizza, false);
// console.log(isPizzaPaidFor);

/* 5. Function that logs a "Your {pizza details} is being delivered".
      If pizza is not paid for yet, display "Please pay us first" */

/* 6. Each function copies the input object and returns
          modified copy */
const hereComesYourPizza = (pizza) => {
  if (pizza.paid === true) {
    return `Your ${pizza.size} inch pizza with ${pizza.toppings} is being delivered`;
  } else {
    return `PAY US NOW!!!!!!!`;
  }
};

const delivery = hereComesYourPizza(isPizzaPaidFor);
// console.log(delivery);

const hi = ["a", "b"];
const b = ["c", "d"];
const today = [...hi, "e", "f"];
console.log(today);



