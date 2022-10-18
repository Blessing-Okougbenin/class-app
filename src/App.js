import { faker } from "@faker-js/faker";
import React from "react";
import CardList from "./components/card/CardList";
// import Counter from "./components/counter/Counter";
import NewCard from "./components/NewCard";

const App = () => {
  const cardData = [{
    id : faker.datatype.uuid(),
    image: faker.image.fashion(),
    title: faker.random.word(),
    description: faker.random.words(faker.random.numeric())
  },

  {
    id : faker.datatype.uuid(),
    image: faker.image.food(),
    title: faker.random.word(),
    description: faker.random.words(faker.random.numeric())
  },

  {
    id : faker.datatype.uuid(),
    image: faker.image.nature(),
    title: faker.random.word(),
    description: faker.random.words(faker.random.numeric())
  },
]
  return (
    <div>
      <NewCard/>
      <CardList data={cardData}/>
     {/* <Counter/> */}
    </div>
  
  )
};
export default App;

