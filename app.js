
import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {}, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



const para = React.createElement("h1", {}, "hiii guys");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(para);
