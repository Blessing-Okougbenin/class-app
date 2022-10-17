import React, { useState } from 'react'
import "./Counter.css"


const Counter = () => {
    const   [counter, setCounter] = useState(0);
    const   [input, setInput] = useState("");


    const buttonCllickHandlerIncrement = () =>{
    setCounter((prevCounter) =>  (prevCounter + 1))
    console.log(counter);
    }

    const buttonCllickHandlerDecrement = () =>{
        setCounter((p) => (p > 0 ? p-1 : 0))
    };

    const inputChangeHandler = (event)=>{
        setInput(event.target.value);
    };

    const incrementByHandler = () =>{
        setCounter((prevCounter)=> prevCounter + Number(input))
    };

    const decrementByHandler = () =>{
        setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - Number(input) : 0))
    }

  return (
        <div>
            <p>Counter: {counter}</p>

            <button className= "counter_button"
            onClick={buttonCllickHandlerIncrement}>
                Increment
            </button> 

            <button className= "counter_button"
            onClick={buttonCllickHandlerDecrement}>
                Decrement
            </button>

            <input placeholder="Enter a number" 
            type="number" 
            min="0" 
            onChange={inputChangeHandler}
            value={input}/>

            <button className="input_button" 
            onClick={incrementByHandler}>
                IncrementBy
            </button>

            <button className= "input_button"
            onClick={decrementByHandler}>
                DecrementBy
            </button>

        </div>
    )
};

export default Counter;