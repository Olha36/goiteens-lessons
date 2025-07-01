import { Component } from "react";

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.id1 = "email-" + Math.random().toString(36).slice(2) + Date.now();
    this.id2 = "password" + Math.random().toString(36).slice(2) + Date.now();
    this.id3 = "checkbox" + Math.random().toString(36).slice(2) + Date.now();

    this.state = {
        agreed: false,
    }
  }

  handleChange = (e) => {
    this.setState({agreed: e.target.checked})
  }

  render() {
   
    return (
      <>
        <h2>Unique Id generation</h2>
        <form>
          <label htmlFor={this.id1}>Enter your email</label>
          <input type="email" name="email" />
          <p>Email's id is ${this.id1}</p>

          <label htmlFor={this.id2}>Enter your password</label>
          <input type="password" name="password" />
          <p>Unique Id for password is {this.id2}</p>

          <label htmlFor={this.id3}>Agree our terms and conditions</label>
          <input type="checkbox" onChange={this.handleChange} />
          <p>Person {this.state.agreed ? "has agreed ✅" : "has not agreed 😕"}</p>
          <p>Unique id for checkbox is: {this.id3}</p>
        </form>
      </>
    );
  }
}
