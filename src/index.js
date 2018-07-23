import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './router/'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap3/dist/css/bootstrap-theme.min.css'
import 'bootstrap3/dist/css/bootstrap.min.css'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
