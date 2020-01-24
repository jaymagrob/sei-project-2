import React from 'react'
import Joke from './Joke'
import { Link } from 'react-router-dom'


const ResultPage = ({ score }) => (
  <>
    <div className="box level">
      <h1 className="level-item title is-4">Your score: {score}/5</h1>
    </div>
    <div className="container">
      <Joke />
    </div>
    <hr />
    <div>
      <Link to="/" ><button className="button is-fullwidth is-outlined is-success">Restart</button></Link>
    </div>
  </>
)

export default ResultPage