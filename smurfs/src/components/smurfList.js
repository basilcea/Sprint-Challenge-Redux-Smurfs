import React from "react";
import Smurf from "./smurf";
import {connect} from 'react-redux';

class SmurfList extends React.Component {
  render() {
    const smurfs = this.props.smurfs;
    return (
      <div>
        {smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
              />
              <button onClick={() => this.props.updateSmurf(smurf.id)}>
                Update
              </button>
              <button onClick={() => this.props.deleteSmurf(smurf.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SmurfList;
