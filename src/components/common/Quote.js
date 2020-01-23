import React from 'react'
import axios from 'axios'

class Quote extends React.Component {
  state = { 
    quote: '',
    author: '',
    source: ''
  }

  async componentDidMount()  {
    try {
      const res = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
      this.setState({ quote: res.data.en, author: res.data.author, source: res.data.source })
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
            <h1>Quote</h1>
            <div>
              <h2><q>{this.state.quote}</q></h2>
              <h3>{this.state.author}</h3>
              <h3>{this.state.source}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Quote