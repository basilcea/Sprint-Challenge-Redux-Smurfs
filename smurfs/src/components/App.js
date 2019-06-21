import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import SmurfList from '../components/smurfList';
import SmurfForm from '.../components/smurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.getSmurfs()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfList
         smurfs ={this.props.smurfs}
         updateSmurf = {this.props.smurfs}
        />
      </div>
    );
  }
}
const mapStateToProps =(state) =>{
  return{

  }
}

export default connect(mapStateToProps , actions)(App);
