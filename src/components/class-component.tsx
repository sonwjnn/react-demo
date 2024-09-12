import React from "react";

type Props = {
  text: string;
};

interface State {
  count: number;
}

class ClassComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Thực hiện sau khi component đã được render lần đầu
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    // Thực hiện sau mỗi lần component được cập nhật
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    // Thực hiện trước khi component bị unmount
    console.log("Component will unmount");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
