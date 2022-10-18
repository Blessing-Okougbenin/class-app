import React from 'react'
import "./Button.css"

const Button = ({displayname, onClick, bg, color}) => {
  return (
    <button 
       className="btn_button" 
    onClick={onClick} 
    style={{backgroundColor: bg, color: color}}
    displayName >
        {displayname}
    </button>
  )
}

export default Button