import React, { Component } from 'react';
import NavBar from './components/Navbar'
import ApiCall from './components/ApiCall'
import Footer from './components/Footer'
import PersonDescription from './components/PersonDescription'
import StarshipDescription from './components/StarshipDescription'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class App extends Component
{
  render()
  {
      return(
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/" exact component={ApiCall} />
              <Route path="/:id" component={PersonDescription}/>
              <Route path="/starships/:id" component={StarshipDescription}/>
            </Switch>
            <Footer />
          </div>
        </Router>

      )
  }
}


export default App;
