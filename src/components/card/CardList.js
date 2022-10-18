import React from 'react'
import CardDetail from "./CardDetail"
import "./CardList.css";

const CardList = ({data}) => {
  return (
    <div className="card-list">
      {data.map(d => <CardDetail 
        key={d.id}
        title={d.title} 
        description={d.description}
        image={d.image} />)}
    </div>
  )

}

export default CardList