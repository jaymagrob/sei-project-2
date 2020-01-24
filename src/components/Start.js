import React from 'react'
import axios from 'axios'
import ResultPage from './ResultPage'

class Start extends React.Component {
  
  state = {
    results: '',
    questionNum: 0,
    questionObj: {
      question: '',
      correctAnswer: '',
      incorrectAnswers: ''
    },
    combinedAnswers: '',
    playerGuess: '',
    score: 0,
    gamePlaying: true,
    difficulty: ''

  }

  gameStart = async (difficulty) => {
    try {
      const res = await axios.get(`https://opentdb.com/api.php?amount=10&encode=base64&category=18&difficulty=${difficulty}`)
      const questionObj = {
        question: res.data.results[0].question,
        correctAnswer: res.data.results[0].correct_answer,
        incorrectAnswers: res.data.results[0].incorrect_answers
      }
      const combined = [...questionObj.incorrectAnswers]
      const combinedAnswers = [...combined, questionObj.correctAnswer].sort(() => Math.random() - 0.5)
      this.setState({ results: res.data.results, questionObj, combinedAnswers, difficulty })

    } catch (err) {
      console.log(err)
    }
  }

  handleGuess = e => {
    const gamePlaying = true
    if (this.state.playerGuess) return
    let playerGuess = ''
    let score = this.state.score
    if (window.btoa(e.target.textContent) === this.state.questionObj.correctAnswer) {
      playerGuess = 'Correct'
      score += 1
    } else {
      playerGuess = `Incorrect: answer is ${window.atob(this.state.questionObj.correctAnswer)}`
    }
    this.setState({ playerGuess, score, gamePlaying })
  }

  handleNext = () => {
    let gamePlaying = this.state.gamePlaying
    if (this.state.questionNum === 4) gamePlaying = false
    const num = this.state.questionNum + 1
    const newQuestion = this.state.results[num]
    const questionObj = {
      question: newQuestion.question,
      correctAnswer: newQuestion.correct_answer,
      incorrectAnswers: newQuestion.incorrect_answers
    }
    const combined = [...questionObj.incorrectAnswers]
    const combinedAnswers = [...combined, questionObj.correctAnswer].sort(() => Math.random() - 0.5)

    this.setState({ questionObj, combinedAnswers, playerGuess: '', questionNum: num, gamePlaying })
  }

  handleDifficulty = (e) => {
    const difficulty = e.target.textContent.toLowerCase()
    console.log(difficulty)
    this.gameStart(difficulty)
  }




  render() {
    console.log('STATE', this.state)
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                {!this.state.difficulty &&
                  <div className="buttons is-centered">
                    <button className="button has-text-weight-semibold is-medium is-fullwidth is-outlined is-success" onClick={this.handleDifficulty}>Easy</button>
                    <button className="button has-text-weight-semibold is-medium is-fullwidth is-outlined is-info" onClick={this.handleDifficulty}>Medium</button>
                    <button className="button has-text-weight-semibold is-medium is-fullwidth is-outlined is-danger" onClick={this.handleDifficulty}>Hard</button>
                  </div>
                }
                {this.state.gamePlaying && this.state.difficulty &&
                  <>
                    <div className="box container">
                      <h3 className="level-right"> Score: {this.state.score}</h3>
                      <h3 className="level-item title is-6">This is question {this.state.questionNum + 1} out of 5</h3>
                    </div>
                    <div className="box container is-large">
                      <h2>{window.atob(this.state.questionObj.question)}</h2>
                      <hr />
                      <div className="buttons is-centered">
                        {this.state.combinedAnswers && this.state.combinedAnswers.map(answer => (
                          <button onClick={this.handleGuess} className="button" key={answer}>{window.atob(answer)}</button>
                        ))}
                      </div>
                    </div>
                    {this.state.playerGuess &&
                      <>
                        <div className={`box has-text-white has-text-weight-semibold ${(this.state.playerGuess === 'Correct') ? 'has-background-success' : 'has-background-danger'}`}>
                          {this.state.playerGuess}
                        </div>
                        <div className={'level-right'}>
                          <button className="button" onClick={this.handleNext}>Next</button>
                        </div>
                      </>
                    }
                  </>
                }
                {!this.state.gamePlaying && <ResultPage score={this.state.score} />}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }


}

export default Start