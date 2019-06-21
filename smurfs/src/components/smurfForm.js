import React from 'react';
import {addSmurf} from '../actions/index';
import {connect} from 'react-redux';

class SmurfForm extends React.Component{
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef();

    addSmurf= (e) => {
        e.preventDefault
        const data = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value,
        }
        this.props.addSmurf(data);
     
    };
    render(){
        return(

            <form onSubmit={e => this.addSmurf(e)}>
            <h3>Add Smurf</h3>
            <input ref={this.nameRef} type='text' placeholder ='Name' />
            <input ref={this.ageRef} type='text' placeholder='Age'/>
            <input ref={this.heightRef} type='text' placeholder='Height'/>
            <button>Add Smurf</button>
            </form>

        )
    }
}
export default connect(
    null,
    {addSmurf}
  )(SmurfForm);