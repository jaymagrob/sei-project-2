import React from 'react'
import axios from 'axios'

class Joke extends React.Component {
  state = {
    setup: '',
    delivery: '',
    joke: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw,religious,political')
      this.setState({ joke: res.data.joke, setup: res.data.setup, delivery: res.data.delivery })
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
            <h1 className="title is-2 has-text-centered">Joke Time!</h1>
            <div className="has-text-centered">{this.state.joke && <h2>{this.state.joke}</h2>}</div>
            {this.state.setup &&
              <div className="has-text-centered">
                {this.state.setup && <h2>{this.state.setup}</h2>}
                <hr />
              </div>}
            <div className="has-text-centered">{this.state.delivery && <h2>{this.state.delivery}</h2>}</div>
          </div>
        </div>
      </section>
    )
  }
}
export default Joke