import logo from './logo.svg';
import react , {Component} from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
              Road Safety Application
          </p>
        </header>
        <Map google={this.props.google} zoom={3}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC_lAcjnlX4QsUlNuzaiWIF8bHNYuQDuZk")
})(App)
