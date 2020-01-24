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
          <div className="is-mobile is-multiline box">
            <h1 className="title is-2 has-text-centered">Nerdy Quote</h1>
            <div>
              <h2><blockquote>{this.state.quote}</blockquote></h2>
              <h3>-{this.state.author}</h3>
              <h4>{this.state.source}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Quote