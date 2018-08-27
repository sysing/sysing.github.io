import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Sidebar.css';
import './SocialFooter.css';

import profile from './images/profile_square.jpg';
import ntu from './images/ntu.png';
import thu from './images/thu.png';
import jump from './images/jump.png';
import start from './images/start.jpg';
import start_pdf from './images/start_pdf.pdf';
import matrix from './images/matrix.png';

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="NavBar">
            <Link to="/"><img style={{ display: 'block' }} src={profile} align="left" className="ProfilePic" alt="profile" /></Link>  
              <div className='TopLinks'>
                <div className='Link'><Link to="/">About</Link></div>
                <div className='Link'><Link to="/work">Work</Link></div>
                <div className='Link'><Link to="/education">Education</Link></div>
                <div className='Link'><Link to="/projects">Projects</Link></div>
                <div className='Link'><Link to="/quotes">Quotes</Link></div>
              </div>
          </div>
          <hr></hr>
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
    main: () =>
      <div>
        <p>Hi, I am Swee Yang. Welcome to my one-page website. Check out the source code <a href='https://github.com/sysing/sysing.github.io/tree/source'>here</a>.</p>

        <div class="text-center center-block">
          <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
          <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
          <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
          <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
        </div>
      </div>


  },
  {
    path: "/work",
    main: () =>
      <div>
        <div className="WorkRow">
          <div className="WorkHeader">
            <img src={matrix} align="left" className="WorkPic" alt="" />
            <h4 style={{ fontWeight: 'bold' }}>Singapore Valley Awards, Matrix Partners China </h4>
            <span>Python, Javascript, HTML, CSS</span><br />
            <span>June 2018 - August 2018</span><br />
          </div>
          <br />
            <span>Projects:</span><br />
            <ul>
            <li> <a href='https://tranquil-retreat-52501.herokuapp.com/'>Headhunter candidate listing web app with search,filter using Django / Bootstrap </a></li>
            <li> Crawled investment data listing web app with Flask / Ajax, JQuery, DataTable  </li>
            </ul>
        </div>
        <hr></hr>
          <div className="WorkRow">
            <div className="WorkHeader">
              <img src={start} align="left" className="WorkPic" alt="" />
              <div className="WorkDesc">
              <h4 style={{ fontWeight: 'bold' }}>Backend Developer, Start@Beijing (formerly PP租车)</h4>
                <span>PHP, MySQL</span><br/>
                <span>August 2016 - July 2017</span><br />
                <span>Internship under NTUitive's Overseas Entrepreneurship Programme</span><br />
              </div>
            </div>
            <br />
              <span>Projects:</span><br />
              <ul>
              <li> JSON API for promoted car models, allowing product managers to publish promotions using a XML document without dev</li>
              <li> Subscription feature that notifies users when their favorite car models becomes available in their area</li>
              <li> Optimized UI for backend staff portal, implementing search bar with click criteria and hiding redundant information</li>
              <li> SMS notification for urgent matter and daily Wechat notification for pending activities for the sale managers</li>
              <li> Voucher management system for automated CronTab voucher generation and distribution, with weekly automatically generated report for voucher redemption stats</li>
              <li> Conducted A/B testing of new app features via UUID sampling</li>
              </ul>
              <p style={{ fontWeight: 'bold' }}>Featured on School of Computer Science and Engineering's annual brochure:</p>
              <object width="600px" height="600px" data={start_pdf}  type="application/pdf" >
                <p>
                  It appears you don't have a PDF plugin for this browser.You can <a href={start_pdf}>click here to
                  download the PDF file.</a>
                </p>
              </object>
            </div>
        </div>
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
        <hr></hr>
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
    main: () =>
      <div>
        <div className="ProjectRow">
          <img style={{ 'display': 'block' }} src={jump} align="left" className="ProjectPic" alt="Jump" />
            <div className="ProjectHeader">
              <h4>Jump</h4>
              <p>Android application for F&B pre-ordering and personalisation</p>
            </div>
            <div style={{alignContent:'left', margin:'10px'}}>
            <p>Features:</p>
            <ul>
              <li>Pre-orders based on expected arrival time</li>
              <li>Real-time order management system</li>
              <li>Promotions publication and notification</li>
              <li>Waiting time estimations using previous order fulfilment time with weights decaying logarithmically with time</li>
              <li>Wilson score rating based loosely on Reddit's comment ranking algorithm to approximate a restaurant's adjusted rating</li>
              <li>Diet recommendation based on user's biological profile (sex, age, height, weight, etc.)</li>
            </ul>
          <p>Demo:<br/></p>
          </div>
          <div style={{ clear: 'both', display:'flex', justifyContent:'left'}}>
            <iframe title="jumpDemo" allowFullScreen="allowFullScreen" src="https://www.youtube.com/embed/8-KQaWEivTs" frameBorder="1px" allow="autoplay; encrypted-media"></iframe>
          </div>
        </div>

      </div>
  },
  {
  path: "/quotes",
  main: () =>
    <div>
      <a href='http://blogoscoped.com/archive/2005-08-24-n14.html'>Lazy</a> programmers reuse quotes to reflect their design philosophy
      <div className="Blockquote">
        <p>"Simple is better than complex."<br /> - Peter Tims, The Zen Of Python</p>
      </div>
      <div className="Blockquote">
        <p>"The cheapest, fastest and most reliable components of a computer system are those that aren't there."<br /> - Gordon Bell</p>
      </div>
    </div>
  }
];

export default Sidebar;
