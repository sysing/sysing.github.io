import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './sidebar';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
registerServiceWorker();
