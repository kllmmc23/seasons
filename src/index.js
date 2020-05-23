import React, { useState } from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

// const App = () => {
//   const [lat, setLat] = useState();

//   console.log(lat);

//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       setLat(window.navigator.geolocation.getCurrentPosition());

//     },
//     (err) => console.log(err)
//   );
//   return <div>Latitude: {lat}</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, erroMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.state({ erroMessage: err.message });
      }
    );
  }
  //render()---required
  render() {
    if (this.state.erroMessage && !this.state.lat) {
      return <div>Error: {this.state.erroMessage}</div>;
    }
    if (!this.state.erroMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, rootElement);
