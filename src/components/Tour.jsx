import React, { Component } from "react";

export default class Tour extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" key={this.props.id}>
          <img src={this.props.image} alt="photo" />
          <div>
            <h2>{this.props.name}</h2>
            <h2>{this.props.price}</h2>
          </div>
          <p>{this.props.info}</p>
          <button>read more</button>
          <button>not interested</button>
        </div>
      </React.Fragment>
    );
  }
}
