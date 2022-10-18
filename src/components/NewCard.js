import React from 'react'
import "./NewCard.css";
const NewCard = () => {
  return (
    <form className='new-card'>
      <div>
      <label htmlFor='title'>Card title</label>
      <input type="text" id='title'></input>
      </div>
      
      <div>
      <label htmlFor='description'>Card description</label>
      <input type="text" id='description'></input>
      </div>

    </form>
  )
}

export default NewCard