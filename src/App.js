import React, { Component } from "react";
import Tours from "./components/Tours";

export default class App extends Component {
  constructor() {
    super();
    this.state = { tours: [] };
  }
  async componentDidMount() {
    try {
      const req = await fetch("https://course-api.com/react-tours-project");
      const data = await req.json();
      this.setState({ tours: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
