import React, { Component } from "react";
import Tour from "./Tour";

export default class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.tours.map((tour) => {
          return (
            <Tour
              name={tour.name}
              key={tour.id}
              info={tour.info}
              image={tour.image}
              price={tour.price}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
