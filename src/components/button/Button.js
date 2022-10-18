import React from 'react'
import "./Button.css" 
import styled from "styled-components"

const Button = styled.button`
    background-color:  ${props => props.bg ? props.bg : "white"};
    color: ${props => props.color || "white"};
    font-size: 1.3rem;
    padding: 3px;
    margin: 5px;
    border: 100px;

    @media (max-width: 600px){

    }

&:hover{
    background-color: aquamarine;
}
`;

// const Button = ({displayname, onClick, bg, color}) => {
//   return (
//     <button 
//        className="btn_button" 
//     onClick={onClick} 
//     style={{backgroundColor: bg, color: color}}
//     displayName >
//         {displayname}
//     </button>
//   )
// }

export default Button