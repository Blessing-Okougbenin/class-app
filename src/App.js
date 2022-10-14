import React from "react";
import CardDetail from "./components/CardDetail";
// import Nav from "./components/Nav";
import SpacingFlex from "./components/SpacingFlex";
import { faker } from '@faker-js/faker';


function greet(){
  return  " Hello from greet"
}

const App = () => {

  const style = {color: "blue"};
  const title = "Hello there";
  const title2 = {name: "This", quality: "astonishingly beautiful"}

  return (
    <div>
      <h1>{greet()}</h1>
      <h2 style={style}>{title2.name} is {title2.quality}</h2>
      {/* <Nav/> */}
      <CardDetail image={faker.image.nature()}/>
      <CardDetail image={faker.image.animals()}/>
      <CardDetail image={faker.image.food()}/>

      <SpacingFlex/>
      <br></br>
      <hr></hr>
      <SpacingFlex/>


    </div>
  
  )
};
export default App;


// babel does the transpilation of this code
// this is a declarative code
// you can nest a component inside a component

/*

    <div>
      <h1 className="main-text">Hello Fellas, this is react</h1>
      <h2>It's great to be finally here!!!</h2>
      <label for="name">Name: </label>
      <input id="name" placeholder="enter your name" />
      <button style={{ backgroundColor: "blue", color: "white" }} type="submit">submit</button>
          </div>
  );
*/