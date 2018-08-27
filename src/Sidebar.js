import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profile from './images/profile_square.jpg';
import ntu from './images/ntu.png';
import thu from './images/thu.png';
import './Sidebar.css';


class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="NavBar">
            <Link to="/profile"><img style={{ display: 'block' }} src={profile} align="left" className="ProfilePic" alt="profile" /></Link>  
              <div className='TopLinks'>
                <div className='Link'><Link to="/work">Work</Link></div>
                <div className='Link'><Link to="/education">Education</Link></div>
                <div className='Link'><Link to="/Projects">Projects</Link></div>
              </div>
          </div>

          <div style={{ flex: 1, padding: "10px", marginTop:'auto'}}>
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
    main: () => 
        <div>
            <div className="EducationRow">
              <img style={{ 'display': 'block' }} src={ntu} align="left" className="EducationPic" alt="ntu" />
              <div className="EducationDesc">
                  <h4>Bachelor of Engineering (Honours), Computer Science </h4>
                  <p>Nanyang Technological University</p>
                  <p>August 2014 - July 2018</p>
              </div>
            </div>
            <div className="EducationRow">
              <img style={{ 'display': 'block' }} src={thu} align="left" className="EducationPic" alt="thu" />
              <div className="EducationDesc">
                <h4>Exchange, Overseas Entrepreneurship Programme</h4>
                <p>Tsinghua University</p>
                <p>August 2016 - July 2017 </p>
              </div>
            </div>
        </div>
  },
  {
    path: "/projects",
    main: () => <h2>projects</h2>
  }
];
export default Sidebar;
