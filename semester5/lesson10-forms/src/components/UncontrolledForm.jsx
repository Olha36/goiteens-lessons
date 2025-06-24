import { Component } from "react";

export default class UncontrolledForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = e.target;

    console.log(`Name is: ${name.value}`);
    console.log(`Message is: ${message.value}`);
    e.target.reset();
  };

  render() {
    return (
      <>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="enter your name" />
          <textarea
            name="message"
            id="user-message"
            placeholder="your feedback"
          ></textarea>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
