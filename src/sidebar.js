import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './sidebar.css';

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
            <div className='TopLinks'>
              <Link to="/">
                <img src={profile} className="ProfilePic" alt="profile" /><br/>
              </Link>
                <div className='Link'><Link to="/">About</Link></div>
                <div className='Link'><Link to="/work">Work</Link></div>
                <div className='Link'><Link to="/education">Education</Link></div>
                <div className='Link'><Link to="/projects">Projects</Link></div>
              </div>
          </div>
          <hr/>
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
      </div>


  },
  {
    path: "/work",
    main: () =>
      <div>
        <div className="WorkRow">
          <div className="WorkHeader">
            <img src={matrix} align="left" className="WorkPic" alt="" />
            <div className='WorkSub'>
            <h4 style={{ fontWeight: 'bold' }}>Singapore Valley Award Recipient, Matrix Partners China </h4>
            <span>Python, Javascript, HTML, CSS</span><br />
            <span>June 2018 - August 2018</span><br />
            </div>
          </div>
          <br />
          <div className='WorkDesc'>
            SVA is an entrepreneurship competition which offers young talents the rare opportunity to intern with China’s top technology firms. It saw 79 applicants from all six of Singapore’s autonomous universities participating in two days of rigorous pitch sessions. For this competition, I pitched a food & beverage pre-order mobile app which I later developed for the Android Platform. Featured on <a href='https://www.straitstimes.com/business/new-scheme-launched-for-undergrads-to-intern-at-chinas-internet-giants'>Straits Times</a> and <a href='hhttps://www.zaobao.com.sg/news/singapore/story20180324-845226'>Zao Bao</a>.
          </div>
          <div className='WorkProject'>
            <ul>
            <li> <a href='https://tranquil-retreat-52501.herokuapp.com/'>Headhunter candidate listing web app with search,filter using Django / Bootstrap </a></li>
            <li> Crawled investment data listing web app with Flask / Ajax, JQuery, DataTable  </li>
            </ul>
          </div>
        </div>
        <hr></hr>
          <div className="WorkRow">
            <div className="WorkHeader">
              <img src={start} align="left" className="WorkPic" alt="" />
              <div className="WorkDesc">
              <h4 style={{ fontWeight: 'bold' }}>Backend Developer, Start@Beijing (formerly PP租车)</h4>
              <div className='WorkSub'>
                <span>PHP, MySQL</span><br />
                <span>August 2016 - July 2017</span><br />
                <span>Internship under NTUitive's Overseas Entrepreneurship Programme</span><br />
              </div>
              </div>
            </div>
          <div className='WorkDesc'>
           Under NTUitive's Overseas Entrepreneurship Programme, I interned at PPZuChe, a car sharing startup for 10 months as the only foreigner out of 100+ employees. At PPZuChe, I was a PHP backend dev in a Mandarin speaking work environment.
          </div>
          <div className='WorkProject'>
          <ul>
            <li> Xpages API for Product Managers to edit promoted cars</li>
            <li> SMS reminders for sales managers to follow up on order form changes promptly</li>
            <li> Subscription feature that allows users to be notified when their subscribed car model becomes available</li>
            <li> Redesign of order form CRUD access for cross region sales manager</li>
            <li> Simplified the user feedback survey from a open-ended format to a multi-layered response </li>
            <li> Crontab generation of monthly coupon codes and distribution via email, reporting of redemption stats</li>
            <li> 3 layered commonly asked questions web page for customers service reps to easily search for information when responding to query</li>
            <li> Standardisation for internal url links according SEO's vendor requirement</li>
            <li> Auto generation of XML document for Baidu's quick search tool</li>
            <li> A/B testing assignment via UUID hash for trial features </li>
          </ul>
          </div>
          <br/>
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
      <div className="WorkRow">
        <div className="WorkHeader">
          <img src={jump} align="left" className="WorkPic" alt="" />
          <div className="WorkDesc">
            <h4 style={{ fontWeight: 'bold' }}>Jump</h4>
            <div className='WorkSub'>
              <span>Android application for F&B pre-ordering and personalisation</span><br />
            </div>
          </div>
        </div>
        <div className='WorkDesc'>
          Winning product pitch for Singapore Valley Awards
          </div>
        <div className='WorkProject'>
          <ul>
            <li>Pre-orders based on expected arrival time</li>
            <li>Real-time order management system with instant notifications of status updates</li>
            <li>Promotion publication via distributed notification</li>
            <li>Waiting time estimation calculated via previous fulfilment times of decaying weights</li>
            <li>Wilson score rating based loosely on Reddit's comment ranking algorithm to approximate a restaurant's adjusted rating</li>
            <li>Diet recommendation based on user's biological profile (sex, age, height, weight, etc.)</li>
          </ul>
        </div>
        <br />
          </div>
          <div style={{ clear: 'both', display:'flex', justifyContent:'center'}}>
          <iframe title="jumpDemo" allowFullScreen="allowFullScreen" src="https://www.youtube.com/embed/8-KQaWEivTs" frameBorder="1px" allow="autoplay; encrypted-media" height='300' width='auto' ></iframe>
          </div>
        </div>
  },
  {
  path: "/quotes",
  main: () =>
    <div>
      <a href='http://blogoscoped.com/archive/2005-08-24-n14.html'>Lazy</a> programmers reuse quotes to reflect their design philosophy
      <div className="Blockquote">
        <p>"Simple is better than complex."<br /> - Tim Peters, The Zen Of Python</p>
      </div>
      <div className="Blockquote">
        <p>"The cheapest, fastest and most reliable components of a computer system are those that aren't there."<br /> - Gordon Bell</p>
      </div>
    </div>
  }
];

export default Sidebar;
