import React, { useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'

const rootElement = document.getElementById("root");

class App extends React.Component {
  state = { lat: null, erroMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.state({ erroMessage: err.message })
    );
  }
  render() {
    if (this.state.erroMessage && !this.state.lat) {
      return <div>Error: {this.state.erroMessage}</div>;
    }
    if (!this.state.erroMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <div>Loading!</div>;
  }
}
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
ReactDOM.render(<App />, rootElement);
