import { Component } from "react";

type ClassCounterProps = {
  message: string;
};

type ClassCounterState = {
  count: number;
};

export class ClassCounter extends Component<
  ClassCounterProps,
  ClassCounterState
> {
  // if class doesn't receive any props, pass an empty object
  // if class doesn't receive state, omit it
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
