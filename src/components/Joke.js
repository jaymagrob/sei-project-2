import React from 'react'
import axios from 'axios'

class Joke extends React.Component {
  state = { 
    setup: '',
    delivery: '',
    joke: ''
  }

  async componentDidMount()  {
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
      <>
      
        <div className="level-item title">
          <h1>You've earned a joke!</h1>
        </div>
        <div className="">
          <div>{ this.state.setup && <h2>{this.state.setup}</h2> }</div>
          <div>{ this.state.delivery && <h2>{this.state.delivery}</h2> }</div>
          <div>{ this.state.joke && <h2>{this.state.joke}</h2> }</div>
        </div>
      
        
      </>    
    )
  }
}
export default Joke