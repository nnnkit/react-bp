import React from "react";

class App extends React.Component {
  state = {
    counter: 200,
  };
  render() {
    return <h1>Hello Abhishek! {this.state?.counter}</h1>;
  }
}

export default App;
