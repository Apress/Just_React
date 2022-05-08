import React from "react";
import Time from "./Time";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
        {this.state.open && (
          <>
            <Time />
            <button onClick={() => this.setState({ open: false })}>
              Close Time
            </button>
          </>
        )}
        {!this.state.open && <h1>Time display closed</h1>}
      </div>
    );
  }
} 
