import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";
import User from "./validator";

/*
This example is using v4f (Schema-based validation library) 
it makes the code cleaner and easy to debug.

- https://github.com/web-pyjs/v4f . repo
- https://v4f.js.org . docs

This example follows react best practices pattern : 

- component/form.js: file for defining form style only.
- validator.js: file for defining validation rules.
- index.js: managing from state and handlers.
*/

const initState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  cPassword: "",
  errors: {}
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDirty = this.handleDirty.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    // Handle Validation on submit
    User.validate(this.state)
      .then(data => {
        alert("Success");
        this.setState(initState);
      })
      .catch(errors => {
        this.setState({ errors });
      });
  }

  handleDirty(e) {
    // Handle Validation on touch

    const { name, value } = e.target;

    const isValid = User[name].validate(value, {
      verbose: true,
      values: this.state
    });

    if (isValid !== true) {
      this.setState({
        errors: { ...this.state.errors, [name]: isValid }
      });
    } else {
      this.setState({
        errors: { ...this.state.errors, [name]: undefined }
      });
    }
  }

  render() {
    return (
      <div>
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDirty={this.handleDirty}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
