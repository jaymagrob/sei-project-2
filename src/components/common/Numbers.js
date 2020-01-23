import React from 'react'
import axios from 'axios'

class Quote extends React.Component {
  state = { 
    quote: ''
  }

  async componentDidMount()  {
    try {
      const res = await axios.get('http://numbersapi.com/random/trivia/')
      this.setState({ quote: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    console.log('render')
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <h1>Number Fun</h1>
            <div>
              <h2><q>{this.state.quote}</q></h2>
              
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Quote