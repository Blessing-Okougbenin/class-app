import React from "react";
import CardList from "./components/CardList";
import NewCard from "./components/NewCard";

const App = () => {
  return (
    <div>
      <NewCard/>
     <CardList/>
    </div>
  
  )
};
export default App;






// babel does the transpilation of this code
// this is a declarative code
// you can nest a component inside a component
// a component can be a function or a class that returns a jsx(javaScriptXtension)
// The function must return just one element
// elements are html elements(div,span..) but are written is small letters
// components behave like elements.. but they are capitalized and written in camelCasing
// components are js functions that return html(jsx)
