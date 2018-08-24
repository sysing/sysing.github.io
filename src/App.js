import React, { Component } from 'react';
import android from './images/android.png';
import react from './images/react.svg';
import python from './images/python.png';
import profile from './images/profile_square.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <Router>
            <div>
            <header className="App-header">
              <div class="col-sm-1"><Link to="/profile"><img src={profile} align="left" className="App-profile" alt="profile" /></Link></div>
              <div class="col-sm-1"><Link to="/android"><img src={android} align="left" className="App-logo" alt="android" /></Link></div>
              <div class="col-sm-1"><Link to="/python"><img src={python} align="left" className="App-logo" alt="python" /></Link></div>
              <div class="col-sm-1"><Link to="/python"><img src={react} align="left" className="App-logo" alt="react" /></Link></div>
            </header>
            </div>
          </Router>
      
      </div>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Android = () => (
  <div>
    <h2>Android</h2>
  </div>
);

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
);

const Python = () => (
  <div>
    <h2>Python</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


export default App;
