import React from "react";

class validationInReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: ""
      },
      errors: {
        firstName: "",
        email: "",
        password: "",
        mobile: "",
        confirmPassword: ""
      }
    };
  }

  validate = (name, value) => {
    
    const { fields } = this.state;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "") {
          return "First name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "mobile":
        if (!value || value.trim() === "") {
          return "Mobile number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
          return "Enter a valid mobile number.";
        } else {
          return "";
        }
      case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      case "confirmPassword":
        if (!value) {
          return "Confirm Password Required";
        } else if (value !== fields.password) {
          return "New Password and Confirm Password Must be Same";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  handleUserInput = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.firstName && fields.email && fields.password && fields.mobile) {
      const data = {
        firstName: fields.firstName,
        email: fields.email,
        password: fields.password,
        mobile: fields.mobile
      };
      window.alert("subit success", JSON.stringify(data));
      console.log("----data----", data);
    }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <div>
        <div className="border">
          <div>
            <div>
              <label>First name:</label>
              <input
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={event => this.handleUserInput(event)}
                placeholder="First Name"
              />
            </div>
            <div>
              <span className="text-danger">{errors.firstName}</span>
            </div>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={event => this.handleUserInput(event)}
              placeholder="Email Address"
            />
            <div>
              <span className="text-danger">{errors.email}</span>
            </div>
          </div>
          <div>
            <label>Mobile:</label>
            <input
              name="mobile"
              value={fields.mobile}
              onChange={event => this.handleUserInput(event)}
              placeholder="mobile"
            />
            <div>
              <span className="text-danger">{errors.mobile}</span>
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="Password"
              name="password"
              value={fields.password}
              onChange={event => this.handleUserInput(event)}
              placeholder="Password"
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="Password"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={event => this.handleUserInput(event)}
              placeholder="confirm Password"
            />
            <div>
              <span className="text-danger">{errors.confirmPassword}</span>
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          className="login-button pointer"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default validationInReact;
