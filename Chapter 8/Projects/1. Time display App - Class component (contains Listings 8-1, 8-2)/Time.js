import React from "react";
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString(),
      close: false
    };
  }
  componentDidUpdate(prevState) {
    if (prevState.currentTime !== this.state.currentTime) {
      console.log("Time is changing.");
    }
  }
  componentWillUnmount() {
    console.log(`The Time component is going to be unmounted at ${this.state.currentTime}`);
  }
  componentDidMount() {
    console.log(`The Time component is mounted at ${this.state.currentTime}`);
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    return <h1>{this.state.currentTime}</h1>;
  }
}
export default Time;
