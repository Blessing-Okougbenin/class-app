import React, { useState } from 'react'
import "./NewCard.css";
import Button from "./button/Button";
import { faker } from '@faker-js/faker';


const NewCard = () => {
          const[inputs,setInputs] = useState({
            title: "",
            description : "",
          });

          const[card, setCards] = useState({
            id: "",
            title: "",
            description: "",
            image: ""
          })

          const addCardHandler = (event) => {
            event.preventDefault()

              const cardObject = {
                id: faker.datatype.uuid(),
                ...inputs,
                image: faker.image.city()
              };
              setCards(cardObject)

          };
      

          const inputsChangeHandler = (event) => {
            setInputs(prevState => {
              return {...prevState, [event.target.name]: event.target.value}
            });
            console.log(inputs);
          }

        

  return (
    <form className='new-card' onSubmit={addCardHandler}>
      <div>
      <label htmlFor='title'>Card Title : </label>
      <input 
        type="text" 
        name="title"
         id='title'
        value = {inputs.title}
        onChange = {inputsChangeHandler}/>
  
      </div>
      
      <div>
      <label htmlFor='description'>Card Description : </label>
      <input 
            type="text" 
            id='description'
            name="description"
            value={inputs.description}
            onChange={inputsChangeHandler}/>

      </div>
      
      <Button
       displayName = "Add Card" 
       bg="green" 
       color="red"
       />

    </form>
  )
}

export default NewCard