import React from 'react';


class UpdateForm extends React.Component{
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef();

    updateSmurf= (e) => {
        e.preventDefault
        const data = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value,
        }
        this.props.updateSmurf(data);
     
    };
    render(){
        return(
            <form onSubmit={e => this.updateSmurf(e)}>
            <h3>Update Smurfs</h3>
            <input ref={this.nameRef} type='text' placeholder ='Name' />
            <input ref={this.ageRef} type='text' placeholder='Age'/>
            <input ref={this.heightRef} type='text' placeholder='Height'/>
            <button>Update Smurf</button>
            </form>

        )
    }
}
export default UpdateForm