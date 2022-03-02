import React from 'react';
import ReactDOM from 'react-dom';

import {ReactFloatingBalloons} from '../src';

const centerAlign = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const containerStyle = {
  ...centerAlign,
  backgroundColor: '#000',
  height: '100vh',
};

const textContainerStyle = {
  ...centerAlign,
};

const textStyle = {
  color: '#3f51b5',
  fontFamily: 'sans-serif',
  fontSize: '2.5em',
  textTransform: 'uppercase'
};

class App extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 style={textStyle}>
            React <br />
            Floating <br />
            Balloons 
          </h1>
        </div>
        
        <ReactFloatingBalloons count={1} msgText='Yayy!!' colors={['yellow', 'green']} popVolumeLevel={1} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));