import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id= "heading">Namaste React from JSX u</h1>;

const Title = ()=> {
    return <h2 id= "title">Namaste React from Title 😡</h2>;
}

const BodyWord = ()=> {
    return <p id= "body">Namaste React from Body 😡</p>;
}

const num = 9999;
const HeadingComponent = ()=> (
    <div id="container">
        <Title/>
        {jsxHeading}
        <h1>Hello Functional component from React yyy</h1>
        <BodyWord/>
    </div>
     
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);