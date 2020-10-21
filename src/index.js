// First thing is to, instlal the dependencies that we need for the app
// And then require them into the index.js file as shown below.

var React = require("react");
var ReactDOM = require("react-dom");

/* In order to use react to actually create something on screen
 * we're going to use the render function.
 * render(what to show, where to show it, callback function
 *        that informs when that render function has completed.);
 * */

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
