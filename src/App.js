import { faker } from "@faker-js/faker";
import React, { useState } from "react";
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

  const[data, setData] = useState(cardData);

  return (
    <div>
      <NewCard setData= {setData}/>
      <CardList data={data}/>
    </div>
  
  )
};
export default App;

