import React from 'react'
import CardDetail from "./CardDetail"
import { faker } from '@faker-js/faker'
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      <CardDetail image={faker.image.animals()}/>
      <CardDetail image={faker.image.city()}/>
      <CardDetail image={faker.image.fashion()}/>
    </div>
  )

}

export default CardList