import React, { Component } from "react";

class Login extends Component {
  state = {
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    if (event.target.teardrop.value === "Teardrop") {
      localStorage.setItem("auth", "pass1515");
      this.setState({ error: "" });

      return this.props.history.push("/");
    }

    return this.setState({ error: "Wrong, its Teardrop" });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="login-form">
        <h3>Use "Teardrop" to log-in</h3>
        <form onSubmit={this.handleSubmit} id="loginForm">
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
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;
