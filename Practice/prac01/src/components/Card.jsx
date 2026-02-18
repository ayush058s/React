import React from 'react'

const Card = ({ user, age, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={img}
        className="card-img-top"
        alt={user}
      />
      <div className="card-body">
        <h5 className="card-title">{user}</h5>
        <p className="card-text">Age: {age}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default Card
