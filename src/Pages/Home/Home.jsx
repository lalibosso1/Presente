import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import coelhinho from './../../assets/img1.jpg'

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/conteudo') 
  }

  return (
    <div className="container">
      <div className="conteudo" onClick={handleClick}>
        <img src={coelhinho} alt="Coelhinho fofo" className="coelho" />
        <p className="texto">Clique no coelhinho &lt;3</p>
      </div>
    </div>
  )
}

export default Home
