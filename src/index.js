// First thing is to, instlal the dependencies that we need for the app
// And then require them into the index.js file as shown below.

//var React = require("react");
//var ReactDOM = require("react-dom");

// The new way of importing modules in ES6 is the following:

// import React from "react";
// import ReactDOM from "react-dom";

// And that makes the code cleaner instead of having to set variables.

/* In order to use react to actually create something on screen
 * we're going to use the render function.
 * render(what to show, where to show it, callback function
 *        that informs when that render function has completed.);
 * */

//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// ReactDOM.render(
//   <div>
//     <h1>Test!</h1>
//     <p>This is a paragraph!</p>
//   </div>,
//   document.getElementById("root")
// );

// ------ Challenge! --------

/* 1. Create a react app from scratch
 * 2. It tshould display an h1 heading.
 * 3. It should display an unordered list (bullet points)
 * 4. It should contain 3 list elements.
 * */

import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1> My 3 Favourite Sport Activities </h1>
//     <ul>
//       <li>Weightlifting</li>
//       <li>Callisthenics</li>
//       <li>Basketball</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// -------- End of Challenge -------

const fname = "Mirella ";
const lname = "Matsi";
const wholeName = fname + lname;
const luckyNumber = 22;

ReactDOM.render(
  <div>
    <h1>Hello, {wholeName}!</h1>
    <p>Your lucky number is: {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);

/* So as we can see with the above code, JSX allows us to use
 * javascript inside the html that is inside our javascript,
 * by using the {} and inside them the variable that we wrote,
 * in the beggining.
 *
 * Note that inside the {} you can write any valid javascript code,
 * For example there's no need to use the variable luckyNumber and
 * do the calculation outside the render function, we can do
 * inside it! Or we can even generate a random number like below:
 * {Math.floor(Math.random() * 10)} will give us 0-9 "random" numbers
 * */
