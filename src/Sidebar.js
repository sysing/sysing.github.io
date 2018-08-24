import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profile from './images/profile_square.jpg';
import './Sidebar.css';


class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{
              padding: "10px",
              width: "100%",
              background: "#f0f0f0"
            }}
          >
            <Link to="/profile"><img style={{ display: 'block' }} src={profile} align="left" className="App-profile" alt="profile" /></Link>  
            <div style={{ listStyleType: "none", padding: '0' ,margin:'20px',  display:'block '}}>
              <div className='Link'><Link to="/work">Work Experience</Link></div>
              <div className='Link'><Link to="/education">Education</Link></div>
              <div className='Link'><Link to="/Projects">Projects</Link></div>
            </div>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/work",
    main: () => <h2>Work</h2>
  },
  {
    path: "/education",
    main: () => <h2>education</h2>
  },
  {
    path: "/projects",
    main: () => <h2>projects</h2>
  }
];
export default Sidebar;
