import React from 'react'
import Joke from './Joke'
import { Link } from 'react-router-dom'




const ResultPage = ({ score }) => (
  <>
  <div className="box level">
    <h1 className="level-item">Your score: {score}</h1>
  </div>
  <div className="box">
    <Joke />
  </div>
  
  <div className="">
    <Link to="/" ><button className="button is-fullwidth is-outlined is-success">Restart</button></Link>
  </div>
  
  </>
)

export default ResultPage