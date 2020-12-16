import './App.css';
import React from 'react'
import Main from './container/main';
// import { connect } from 'react-redux';
import {  Route, Switch } from 'react-router-dom';
import Screening from './container/Screening';
import Resources from './container/Resources';

class App extends React.Component {

  render(){
  
    return (
      <div className="App">
        <header  ><h1>Non-Accidental Trauma Screening and Referral Tool</h1></header>
        <Switch>
          <Route 
            path="/screening_tool"
            render={ () => 
            <Screening /> }
          />
          <Route 
            path="/resources"
            render={ () => <Resources />}
          />
          <Route 
            path="/"
            render={ () => 
            <Main />
          }
          />
        </Switch>
      </div>
    );
  }

}

export default App;
