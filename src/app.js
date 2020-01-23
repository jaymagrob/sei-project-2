import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './stylesheets/main.scss'

import Navbar from './components/common/Navbar'
import Start from './components/Start'
import Footer from './components/common/Footer'
import Joke from './components/Joke'
import Quote from './components/common/Quote'
import Home from './components/common/Home'
import Timer from './components/common/Timer'
import Numbers from './components/common/Numbers'


class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>

        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Start} />
            <Route path="/quote" component={Quote} />
            <Route path="/joke" component={Joke} />
            <Route path="/timer" component={Timer} />
            <Route path="/numbers" component={Numbers} />
          </Switch>
          {/* <Footer /> */}
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

