import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <h3>Use "Teardrop" to log-in</h3>
        <form id="loginForm">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="teardrop"
              placeholder="Enter here"
              required
            />
          </div>
          <button className="btn btn-lg btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
