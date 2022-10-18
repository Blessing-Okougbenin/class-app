import React, { useState } from 'react'
import "./NewCard.css";
import Button from "./button/Button";
import { faker } from '@faker-js/faker';


const NewCard = ({setData}) => {
          const[inputs,setInputs] = useState({
            title: "",
            description : "",
          });


          const addCardHandler = (event) => {
            event.preventDefault()

              const cardData = {
                id: faker.datatype.uuid(),
                ...inputs,
                image: faker.image.city()
              };

                setData((prevCardData) => [cardData, ...prevCardData])
              setInputs({title: "", description: ""});
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
      
      <Button color='black'>Add Card</Button>

    </form>
  )
}

export default NewCard