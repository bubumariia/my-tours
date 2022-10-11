import React, { Component } from "react";

export default class Tour extends Component {
  constructor() {
    super();
    this.state = {
      readMoreBtn: false,
    };
  }
  handleNotInterestedBtn = (event) => {
    console.log(event.target.parentElement.remove());
  };
  render() {
    console.log(this.state.updateTours);
    return (
      <React.Fragment>
        <div className="tour" key={this.props.id}>
          <img src={this.props.image} alt="photo" />
          <div className="title">
            <h3 className="name">{this.props.name}</h3>
            <h4 className="price">{"$" + this.props.price}</h4>
          </div>
          <p>
            {this.state.readMoreBtn
              ? this.props.info
              : this.props.info.substring(0, 200) + "..."}
            <button
              className="readMore"
              onClick={() => {
                this.setState({ readMoreBtn: !this.state.readMoreBtn });
              }}
            >
              {this.state.readMoreBtn ? "Show less" : "Read more"}
            </button>
          </p>

          <button
            className="notInterestedBtn"
            onClick={this.handleNotInterestedBtn}
          >
            Not interested
          </button>
        </div>
      </React.Fragment>
    );
  }
}
