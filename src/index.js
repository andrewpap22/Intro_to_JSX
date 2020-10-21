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

// import React from "react";
// import ReactDOM from "react-dom";

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

// const fname = "Mirella ";
// const lname = "Matsi";
// const wholeName = fname + lname;
// const luckyNumber = 22;

// ReactDOM.render(
//   <div>
//     <h1>Hello, {wholeName}!</h1>
//     <p>Your lucky number is: {luckyNumber}</p>
//   </div>,
//   document.getElementById("root")
// );

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

/* ------- Another challenge! --------- */

/* 1. Create a react app from scratch.
 * 2. it should display 2 paragraph HTML elements.
 * 3. The paragraphs should say:
 *  Created by YOURNAME
 *  'Copyright Symbol' CURRENTYEAR
 * */

import React from "react";
import ReactDOM from "react-dom";

// const myName = "Mirella";
// //const currentYear = 2020;

// var d = new Date(); //returns current date (whole one)
// var n = d.getFullYear(); //gets only the year from the above line

// ReactDOM.render(
//   <div>
//     <p>Created by {myName}</p>
//     <p>&copy; {n}</p>
//   </div>,
//   document.getElementById("root")
// );

// ------- End of challenge2 --------

/* ---- Add styling to our apps with react ----- */

/* So the way that we add stling to our apps with react is:
 * add an attribute class caleed: clsasName (and not simply class)
 * and then apply the styling in the css file refering to that class
 * as you would normaly do in an html file.
 * Kepp in mind that, because the HTML is compiled down to javascript
 * we have to keep using the camelCase everywhere, that is true as well
 * for the html attributes as you can see below. */

// ReactDOM.render(
//   <div>
//     <h1 className="heading">My Favourite Sports</h1>
//     <div>
//       <img
//         className="img"
//         alt="img1"
//         src="https://i.pinimg.com/originals/e0/90/b2/e090b2655238e071ae4cd58465292c60.jpg"
//       ></img>
//       <img
//         className="img"
//         alt="img2"
//         src="https://i.pinimg.com/originals/1e/32/07/1e32072af42cb87a83f3194a9e611378.jpg"
//       ></img>
//       <img
//         className="img"
//         alt="img3"
//         src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/outdoors-basketball-court-night-andersen-ross.jpg"
//       ></img>
//     </div>
//   </div>,
//   document.getElementById("root")
// );

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="header">Random Image</h1>
    <img src={img + "?grayscale"} alt="a random pic"></img>
  </div>,
  document.getElementById("root")
);
