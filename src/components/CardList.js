import React from 'react'
import CardDetail from "./CardDetail"
import { faker } from '@faker-js/faker'

const CardList = (props) => {
  return (
    <div>
      <CardDetail description={faker.lorem.paragraph()} image={faker.image.animals()}/>
    </div>
  )
}

export default CardList