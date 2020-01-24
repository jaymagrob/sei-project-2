import React from 'react'
import axios from 'axios'

class Fact extends React.Component {
  state = {
    quote: ''
  }

  async componentDidMount() {
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
          <div className="is-mobile box">
            <h1 className="title is-2 has-text-centered">Number Fact</h1>
            <div>
              <h2 className="has-text-centered"><q>{this.state.quote}</q></h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Fact