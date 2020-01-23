import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (



  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-white is-1">{'//TODO: QUIZ'}</h1>
        <Link to={'/quiz'}>
          <button className="subtitle button" >START QUIZ</button>
        </Link>
      </div>
    </div>
  </section>

)

export default Home
