import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<App />) ;
// a component can be a function or a class that returns a jsx(javaScriptXtension)
// The function must return just one element
// elements are html elements(div,span..) but are written is small letters
// components behave like elemenst.. but they are capitalized and written in camelCasing
