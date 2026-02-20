import React from 'react'
import Card from './components/Card'

const App = () => {
  const peopleData = [
  {
    id: 1,
    name: "Ayush Singh",
    image: "https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg",
    description: "Full-stack developer with strong problem-solving skills.",
    rating: 4.8,
    earned: "$45k+",
    rate: "$50/hr"
  },
  {
    id: 2,
    name: "Riya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "UI/UX designer focused on clean and modern interfaces.",
    rating: 4.7,
    earned: "$38k+",
    rate: "$45/hr"
  },
  {
    id: 3,
    name: "Arjun Verma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Backend engineer specializing in Spring Boot and APIs.",
    rating: 4.9,
    earned: "$60k+",
    rate: "$65/hr"
  },
  {
    id: 4,
    name: "Neha Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "Data analyst with expertise in SQL and Power BI.",
    rating: 4.6,
    earned: "$42k+",
    rate: "$48/hr"
  },
  {
    id: 5,
    name: "Rohit Mehta",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    description: "MERN stack developer and open-source contributor.",
    rating: 4.8,
    earned: "$55k+",
    rate: "$60/hr"
  },
  {
    id: 6,
    name: "Ananya Gupta",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    description: "Content strategist and technical writer.",
    rating: 4.5,
    earned: "$30k+",
    rate: "$35/hr"
  },
  {
    id: 7,
    name: "Kunal Joshi",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    description: "DevOps engineer experienced with AWS and Docker.",
    rating: 4.9,
    earned: "$70k+",
    rate: "$75/hr"
  },
  {
    id: 8,
    name: "Pooja Nair",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    description: "Mobile app developer (Flutter & Android).",
    rating: 4.6,
    earned: "$40k+",
    rate: "$50/hr"
  },
  {
    id: 9,
    name: "Aman Khan",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    description: "Cybersecurity analyst and ethical hacker.",
    rating: 4.7,
    earned: "$58k+",
    rate: "$70/hr"
  },
  {
    id: 10,
    name: "Sneha Roy",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    description: "AI/ML engineer with real-world project experience.",
    rating: 4.8,
    earned: "$65k+",
    rate: "$80/hr"
  }
];
  return (
<div className="container">
      {peopleData.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  )
}

export default App