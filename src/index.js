import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fontello/css/react-uikit-starter.css'
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
