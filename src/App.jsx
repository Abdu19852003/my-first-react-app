import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  upCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  downCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Zähler-App</h1>
        <p>Aktueller Zählerstand: {(count >10 ? changImage() : count)}</p>
        <button onClick={this.upCount}>Erhöhen</button>
        <button onClick={this.downCount} >Verringern</button>
        <button onClick={this.reset}>Zurücksetzen</button>
      </div>
    );
  }
}
const body =document.querySelector("body");
const changImage=()=>{
  body.style.backgroundImage="url(./assets/matt-walsh-tVkdGtEe2C4-unsplash.jpg)"

}

export default App;
