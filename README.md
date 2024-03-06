# React-info

/*const heading = React.createElement(
    "h1", 
    {id:"heading" , xyz:"abc" }, 
    "Hello World from react");

console.log(heading); // gives us a react element which is nothing but a js object 
*/
import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement( "div",{id:"child"},[
            React.createElement("h1",{}," i am h1 tag"),
            React.createElement("h2",{}," i am h2 tag")
        ]),
        React.createElement( "div",{id:"child2"},[
            React.createElement("h1",{}," i am h1 tag"),
            React.createElement("h2",{}," i am h2 tag")
        ])
    ]
        );

console.log(parent);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// renders the heading in the div with id as 'root

// job of the render is to take the object and convert it into h1 tag and  put inside the div with id 'root'
