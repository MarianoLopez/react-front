import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap3/dist/css/bootstrap-theme.min.css'
import 'bootstrap3/dist/css/bootstrap.min.css'

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
