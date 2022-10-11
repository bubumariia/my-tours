import React, { Component } from "react";
import Tour from "./Tour";

export default class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.state.updateIndex);
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="header">Our Tours</h1>

          {this.props.tours.map((tour, index) => {
            return (
              <Tour
                index={index}
                name={tour.name}
                key={tour.id}
                info={tour.info}
                image={tour.image}
                price={tour.price}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
