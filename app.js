import React from "react";
import ReactDOM  from "react-dom";

 const elem = <span>React elemnt</span>
const jsxHeading = <h1 id="heading" > Namaste React using jsx {elem} </h1>

const App = () =>{
    return <h1> namaste react </h1>
}
const number=1000;

const HeadingComponent = ()=> (
    <div id="container">
    <h2> {number} </h2>  //{ } filter the data before exceuting and prevents from cross site scripting attack 
    {jsxHeading}
    {App()} // another way of calling the component directly 
    <App> </App> // both are same and used to load functional component
    <App />
        <h1 className="heading">Namaste React Functional component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent />);
