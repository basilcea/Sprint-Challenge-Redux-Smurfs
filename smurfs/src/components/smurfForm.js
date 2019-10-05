import React from "react";
import { addSmurf, updateSmurf} from "../actions/index";
import { connect } from "react-redux";

class SmurfForm extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        name: "",
        age: "",
        height: "",
        text: "Add Smurf",
        value:this.addSmurf
      };
  }



  addSmurf = e => {
      e.preventDefault();
    this.props.addSmurf(this.state);
  };

  updateSmurf = e => {
      e.preventDefault();
    this.props.updateSmurf(this.props.match.params.id, this.state);
    this.props.history.push({pathname:`/smurfs`})
  };

  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.pathname ===
        `/smurfs/update/${this.props.match.params.id}`
    ) {
      const smurf = this.props.smurfs.find(
        item => item.id === Number(this.props.match.params.id)
      );
      smurf &&
        this.setState({
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          text: "Update Smurf",
          value:this.updateSmurf
        });
    }
  }

  change = event => {
      this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.state.value(e)}>
        <h3>{this.state.text}</h3>
        <input
          name="name"
          value={this.state.name}
          onChange={event => this.change(event)}
          type="text"
          placeholder="Name"
        />
        <input
        name="age"
          value={this.state.age}
          onChange={event => this.change(event)}
          type="text"
          placeholder="Age"
        />
        <input
        name="height"
          value={this.state.height}
          onChange={event => this.change(event)}
          type="text"
          placeholder="Height"
        />
        <button>{this.state.text}</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};
export default connect(
  mapStateToProps,
  { addSmurf, updateSmurf }
)(SmurfForm);
