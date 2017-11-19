import React, { Component } from "react";

import ContentTable from "./ContentTable";

class Content extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    const auth = localStorage.getItem("auth");

    if (auth) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(itemsAsync => {
          return this.setState({ items: itemsAsync });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ContentTable items={this.state.items} />
          </div>
          <div className="col-xs-12" />
        </div>
      </div>
    );
  }
}

export default Content;
