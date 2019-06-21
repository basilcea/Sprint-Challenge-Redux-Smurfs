import React from "react";
import Smurf from "./smurf";
import {Link} from 'react-router-dom';

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
             <Link to ={`/smurfs/${smurf.id}/update`}>Update</Link>
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
