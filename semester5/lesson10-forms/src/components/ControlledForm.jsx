import { Component } from "react";

export default class ControlledForm extends Component {
  state = {
    login: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(`Submitted login is: ${this.state.login}, password is: ${this.state.password}`);
    
  };

  render() {
    return (
      <>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter login</label>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            value={this.state.login}
          />

          <label>Enter password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
