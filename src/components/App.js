import React from 'react';
import '../stylesheets/App.scss';
import ReactGlobe from 'react-globe';

function App() {
  return (
    <div className="App">
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactGlobe />
      </div>

    </div>
  );
}

export default App;
