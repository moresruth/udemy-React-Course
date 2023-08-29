import { feed } from "./feed";
// import { post } from "./post";
// import React from "react";
// import ReactDOM from "react-dom/client";

// const myFirstElement = <h1>This is my first element</h1>;

// ReactDOM.createRoot(document.getElementById("root")).render(myFirstElement);
// //

// function printLoop() {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }

//   console.log("OUTSIDE", i);
// }

// printLoop();

// let x = 10;
// const y = 10;

// x = 20;
// y = 20;

// function sayHello() {
//   console.log("Hello JavaScript World");
// }

// sayHello();

//  ##########--------- arrow function --------########
// const sayGreet = () => {
//   console.log("Hello JavaScript World!");
// };

// sayGreet();

// ##########--------- how to add arguments? --------########
// const sayGreet = (name) => {
//   console.log("Hello JavaScript World!", name);
// };

// sayGreet("Ruth");

// ##########--------- Accessing the objects --------########
const user1 = {
  name: "Ruth",
  email: "ruth@gmail.com",
};

// console.log(user.name);
console.log(user1["email"]);

// ##########--------- Object Destructuring --------########
const user = {
  name: "Mors",
  email: "mors@gamil.com",
  country: "PH",
};

// const name = user.name;
// const email = user.email;
// const country = user.country;
const { name: userName, email: mail, country } = user;

console.log(userName, mail, country);

// ##########--------- Map Method --------########
// ##########--------- array method--------########
const products = ["Product1", "Product2", "Product3"];

// const displayItems = products.map((product) => "<li>" + product + "</li>");
// ##########--------- template literals--------########
const displayItems = products.map((product) => `<li>${product}</>`);

console.log(displayItems);

// ##########--------- Filter Method --------########
// #######--------- filter is used to remove items from existing array and always return a new array--------########

const ages = [5, 23, 14, 30, 21];

console.log(ages);

// const adults = ages.filter((age) => age > 18);
const adults = ages.filter((age) => age !== 23);

console.log(adults);

// ##########--------- Spread Operator --------########
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
// const arr3 = [5, 6];

// const numbers = arr1.concat(arr3, arr2);
const numbers = [0, ...arr1, 5, 6, ...arr2];
console.log(numbers);

const obj1 = {
  name: "Meet",
};
const obj2 = {
  hobby: ["Teaching", "Learniing"],
};

const user2 = { ...obj1, ...obj2, Youtube: "Code Mors" };
console.log(user2);

// ##########--------- Ternary Operator / Conditional operator--------########
// #####---- used for adding condition / are the shortcuts way to write If-else condition ----#####

// syntax of ternary operator
// condition ? trueExpression : falseExpression
const marks = 20;

const result = marks > 35 ? "Pass" : "Fail";
console.log(result);

// ##########--------- Modules--------########
// #####---- is a file that conatins code to perfrom specific task ----#####
// #####---- it can contain variables, objects, functions etc----#####

// function post() {
//   console.log("this is post");
// }

// function feed() {
//   console.log("This is feed");
//   post();
//   post();
//   post();
// }

feed();
