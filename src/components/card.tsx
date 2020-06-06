import React from "react"
import { Card } from '../types/types';

const card = (props: Card) => {
  const { cardTitle, cardSubtitle, cardStack, link } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <p className="card-text">{cardStack}</p>
          <a href={link} className="card-link">
            Link
          </a>
        </div>
      </div>
    </div>
  )
}

export default card
