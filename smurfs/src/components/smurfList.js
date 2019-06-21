import React from "react";
import Smurf from "./smurf";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteSmurf, getSmurfs} from '../actions';

class SmurfList extends React.Component {
  render() {
    const {smurfs} = this.props;
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
const mapStateToProps=(state) =>{
    return({
        smurfs: state.smurfs
    })
   
}
export default connect(
    mapStateToProps,
    {deleteSmurf, getSmurfs}
  )(SmurfList);
