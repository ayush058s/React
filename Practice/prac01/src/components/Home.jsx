import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div className="home">
      <Card
        user="Ayush"
        age={19}
        img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF"
      />
      <Card
        user="Flower"
        age={89}
        img="https://img.freepik.com/free-photo/daisy-flower-against-gradient-background_23-2149244157.jpg?semt=ais_user_personalization&w=740&q=80"
      />
      <Card
        user="Boat"
        age={9}
        img="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
      />
    </div>
  )
}

export default Home
