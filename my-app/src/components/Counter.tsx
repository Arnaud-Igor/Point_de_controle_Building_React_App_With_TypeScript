/* ---------------- CODE : 02 => EN JSX ---------------- */

/* import { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return;
    <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
export default Counter;
 */

/* ---------------- CODE : 02 => EN TSX ---------------- */

import { Component } from "react";

interface State {
  count: number;
}

export class Counter extends Component<State> {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
