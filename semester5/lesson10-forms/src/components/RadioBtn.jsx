import { Component } from "react";

export default class RadioBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: "",
    };
  }

  handleChange = (e) => {
    this.setState({ gender: e.target.value });
  };
  render() {
    return (
      <>
        <h1>Choose a gender</h1>

        <form>
          <label htmlFor="">Choose your gender, please</label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </form>
      </>
    );
  }
}
