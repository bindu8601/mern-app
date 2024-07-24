import React from 'react'
import Register from './components/Register';
import axios from 'axios'
function App() {
  axios.defaults.baseURL='http://localhost:4000';
  axios.defaults.withCredentials=true
  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
