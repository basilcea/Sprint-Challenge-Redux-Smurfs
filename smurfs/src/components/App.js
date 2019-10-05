import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {getSmurfs} from "../actions/index";
import SmurfList from "../components/smurfList";
import SmurfForm from "../components/smurfForm";
import { Route } from "react-router-dom";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props);
  }
  render() {
    const smurfs = this.props.smurfs;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <Route
          exact
          path="/smurfs"
          render={props => (
            <div>
              {" "}
              <SmurfForm />
              {/* addSmurf = {this.props.addSmurf} />*/}
              <SmurfList
              // smurfs ={smurfs}
              // deleteSmurf = {this.props.deleteSmurf}
              // {...props}
              />
            </div>
          )}
        />
        <Route
          exact path="/smurfs/update/:id"
          render={props => (
            <SmurfForm
            // smurfs={smurfs}
            // updateSmurf={this.updateSmurf}
            {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {getSmurfs}
)(App);
